const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const healthRoutes = require('./routes/health.routes');

const errorMiddleware = require('./middlewares/error.middleware');
const notFoundMiddleware = require('./middlewares/not-found.middleware');

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


// Ruta Health check
app.use('/api/health', healthRoutes);

// Middleware para rutas no encontradas(404)
app.use(notFoundMiddleware);

// Middleware de manejo de errores(500)
app.use(errorMiddleware);

module.exports = app;
