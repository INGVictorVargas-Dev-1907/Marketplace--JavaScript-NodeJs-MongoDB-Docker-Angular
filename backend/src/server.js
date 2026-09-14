require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `\n🚀 Servidor corriendo en el entorno: ${process.env.NODE_ENV || 'development'}`
  );
  console.log(`🌐 Backend disponible en: http://localhost:${PORT}\n`);
});
