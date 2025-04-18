import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import prisma from "../prisma/client";

// Tipar el callback 'done'
type DoneFunction = (error: any, user?: Express.User | false) => void;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/api/auth/google/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: DoneFunction
    ) => {
      try {
        const email = profile.emails?.[0]?.value || "";

        const existingUser =
          (await prisma.user.findUnique({ where: { googleId: profile.id } })) ||
          (await prisma.user.findUnique({ where: { email } }));

        if (existingUser) return done(null, existingUser);

        const newUser = await prisma.user.create({
          data: {
            name: profile.displayName,
            email,
            googleId: profile.id,
            image: profile.photos?.[0]?.value || null,
            username: `google_${profile.id.slice(-6)}`,
          },
        });

        done(null, newUser);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

// Serialización del usuario
passport.serializeUser((user: any, done: (err: any, id?: string) => void) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done: (err: any, user?: Express.User | null) => void) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
