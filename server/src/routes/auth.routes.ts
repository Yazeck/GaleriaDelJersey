import { Router, Request, Response } from "express";
import { register, login } from "../controllers/auth.controller";
import passport from "passport";
import { generateToken } from "../utils/jwt";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req: Request, res: Response) => {
    const user = req.user as { id: string; role: string };
    const token = generateToken({ id: user.id, role: user.role });
    res.json({ token, user });
  }
);

export default router;
