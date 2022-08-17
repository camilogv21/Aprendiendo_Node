const express = require('express')
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('src/views/static'));

app.get("/", (req,res)=>{
    res.render('pages/index');
})

app.get("/about", (req,res)=>{
    res.send("este es el acerca de");
})

app.get("/error", (req,res)=>{
    res.render('pages/error')
})

app.get("/registrar", (req,res)=>{
    res.render('pages/registrar')
})


app.listen(PORT, (req,res)=>{
    console.log (`ejecutando el node en el puerto ${PORT}` )
});

app.get('/listar', function(req, res) {
    var Aprendices = [
        { nombre: 'Sammy', ficha: "36982", promedio: 4.5},
        { nombre: 'Boby', ficha: "36982", promedio: 4.9},
        { nombre: 'Dock', ficha: "36982", promedio: 3.5}
    ];
    var tagline = "ADSI Jornada de la mañana";

    res.render('pages/listar', {
        matriculados: Aprendices,
        lema: tagline
    });
});
