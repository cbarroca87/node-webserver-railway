require('dotenv').config()
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático

app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'César Barro Carrasco',
    titulo: 'Curso de node'
  });
})

app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'César Barro Carrasco',
    titulo: 'Curso de node'
  });
})

app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'César Barro Carrasco',
    titulo: 'Curso de node'
  });
})


app.get('/hola-mundo', (req, res) => {
  res.send('Hello World')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})