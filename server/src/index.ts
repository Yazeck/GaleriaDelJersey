// server/src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
// index.ts
import authRoutes from "./routes/auth.routes";
import "./config/passport";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes); // 👈 esto conecta /google y /google/callback

app.get('/', async (_req, res) => {
  const usuarios = await prisma.user.findMany();
  res.json({ message: 'API de La Galería del Jersey funcionando 🚀', usuarios });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
