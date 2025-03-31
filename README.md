# La Galería del Jersey

Marketplace web para compraventa de jerseys de fútbol, desarrollado con stack MERN, Prisma y arquitectura RESTful.

---

## 🧱 Arquitectura del Proyecto

**Frontend:** React.js + TailwindCSS  
**Backend:** Node.js + Express.js  
**Base de Datos:** MongoDB (con Prisma como ORM)  
**API:** RESTful con autenticación por JWT  
**Despliegue:** Render / Vercel / Netlify (por definir)

---

## 📁 Estructura del Monorepo

```
la-galeria-del-jersey/
├── client/        # React (frontend)
├── server/        # Express + Prisma (backend)
├── .github/       # CI/CD Workflows
├── .env.example   # Variables de entorno modelo
├── README.md      # Documentación general
└── package.json   # (opcional) root del monorepo si se usan workspaces
```

---

## 🔐 Roles en el sistema

- Visitante (sin cuenta)
- Usuario registrado (comprador o vendedor)
- Administrador

---

## 🔧 Tecnologías Clave

- React 18 + Vite + TailwindCSS
- Express.js + Prisma ORM
- MongoDB (podría cambiarse por PostgreSQL si es necesario)
- JSON Web Tokens (JWT)
- GitHub Actions para CI/CD

---

## 📦 Entorno de desarrollo

Crear un archivo `.env` en la raíz de `/server` y `/client` según corresponda. Ejemplo:

```env
# server/.env
DATABASE_URL=
JWT_SECRET=
ESTAFETA_API_KEY=
PAGOS_API_KEY=
```

---

## 🧪 CI/CD

Se usará GitHub Actions para:
- Validar código (lint/tests)
- Build del proyecto
- Despliegue automático

---

## ✍️ Autor

Desarrollado por Erick YazecK Nungaray Mata — [YAZECK.COM](https://yazeck.com)

