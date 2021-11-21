// Módulos
const express = require('express');
const app = express();
const path = require('path');
const mainRoute = require('./routes/mainRouter')

const port = process.env.PORT || 3050;

app.set('views', path.resolve(__dirname, './views'));

// Configuración
app.use(express.static('src/public'));
// Template engine
app.set('view engine', 'ejs');

app.use('/', mainRoute);


// Rutas
// Archivos de ruta y vistas ejs
app.get('/', (req, res) => {
    res.render('index');
    //res.sendFile(path.resolve(__dirname, ('./views/index.html')))
})



app.listen(port, () => {(console.log (`Listening on port ${port} `))
});

