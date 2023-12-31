// --- IMPORTACIONES
const path     = require('path');
const express  = require('express');
const mongoose = require('mongoose');
const routes   = require('./routes');
const config   = require('./config');

const app      = express();

// --- CONEXIÓN A BASE DATOS
mongoose.connect(config.db_uri, { useNewUrlParser: true, useUnifiedTopology: true,
  dbName: config.db_name,
  user: config.db_user,
  pass: config.db_pass})
  .then(db   => console.log ('Conexión correcta a la BD'))
  .catch(err => console.log ('Error en la conexión a la BD'));

// --- MIDDLEWARE
app.use(express.static(path.join(__dirname , 'public'))); // Archivos estáticos
app.use(express.json());                                  // Soporte de JSON
app.use('/api', routes);                                  // Rutas

// ---- PUERTO DE ESCUCHA
app.listen (config.port, () => console.log(`Servidor iniciado en puerto ${config.port}`));
