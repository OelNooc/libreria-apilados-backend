const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const libroRoutes = require('./routes/libroRoutes');

require('dotenv').config();

const app = express();

conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api/libros', libroRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
