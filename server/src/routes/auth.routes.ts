
import { register, login } from "../controllers/auth.controller";


import express, { Request, Response } from "express";
import passport from "passport";
import { generateToken } from "../utils/jwt";

const router = express.Router();

// Ruta para iniciar el login con Google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Ruta de callback de Google, aquí es donde entra después del login
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req: Request, res: Response) => {
    const user = req.user as { id: string; role: string };
    const token = generateToken({ id: user.id, role: user.role });

    // Redirige al frontend con el token en la URL
    const frontendURL = "http://localhost:3000";
    res.redirect(`${frontendURL}/auth/callback?token=${token}`);
  }
);

export default router;
