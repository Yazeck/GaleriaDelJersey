import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import prisma from "../prisma/client";
import { generateToken } from "../utils/jwt";
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, username, email, password } = req.body;

    // Verifica si el email o username ya están registrados
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email }
        ]
      }
    });

    if (existingUser) {
      res.status(400).json({ error: "Correo o usuario ya registrados" });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    

    const user = await prisma.user.create({
      data: { name, username, email, passwordHash } as any,
    });

    const token = generateToken({ id: user.id, role: user.role });
    res.json({ token, user });
  } catch (err) {
    next(err);
  }
};


export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.passwordHash) {
      res.status(400).json({ error: "Credenciales inválidas" });
      return;
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: "Contraseña incorrecta" });
      return;
    }

    const token = generateToken({ id: user.id, role: user.role });
    res.json({ token, user });
  } catch (err) {
    next(err);
  }
};
