import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// This code sets up a basic Express server with authentication routes.
// It uses dotenv for environment variables and includes a JSON parser middleware.
// The server listens on a specified port and logs the URL to the console.
// The authentication routes are imported from a separate module, allowing for modular code organization.
// The server is configured to handle JSON requests and responses, making it suitable for RESTful APIs.
// The server is ready to be extended with additional routes and middleware as needed.
// The code is structured to allow for easy integration with a database and authentication logic.
// The server can be further enhanced with error handling, logging, and security features.
// This setup provides a solid foundation for building a web application with user authentication.
// The server can be run using Node.js, and it will respond to requests made to the defined routes.
// The code is designed to be simple and straightforward, making it easy for developers to understand and modify.
// The server can be tested using tools like Postman or curl to ensure the authentication routes are functioning correctly.     