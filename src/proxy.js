// proxy.js

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Ruta para redirigir las solicitudes a la API
app.get('/api/items', async (req, res) => {
  try {
    const response = await axios.get('https://erp.duxsoftware.com.ar/WSERP/rest/services/items?offset=50&limit=50', {
       
      headers: {
        accept: 'application/json',
        authorization: '2I2p6kcXxdjs4uxDtl4M5K12G8KlgnYla1lfHLqGsINq7UQb6sSwv0wver5OqqAi',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
