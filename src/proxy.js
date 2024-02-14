// proxy.js

const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// Ruta para redirigir las solicitudes a la API
app.get("/api/items", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8000/api/items", {
        headers: {
          accept: "application/json",
          authorization: "mZ3CSCVZYN8KEI5FfcAw2kCiYoPW8ra5OJoX8Bx8k5iKYyRTg2MLpc6ZuHU1wNoo",
        },
      });
      
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
