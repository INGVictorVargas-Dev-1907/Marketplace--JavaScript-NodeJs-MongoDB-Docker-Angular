const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express();

// Seguridad HTTP
app.use(helmet());

// CORS
app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
);

// Procesar JSON
app.use(express.json());

// Procesar formularios
app.use(express.urlencoded({ extended: true }));

// Cookies en las respuestas
app.use(cookieParser());

// Compresión de respuestas
app.use(compression());


// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
