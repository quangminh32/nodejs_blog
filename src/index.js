const path = require('path')
const morgan = require('morgan')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const sass = require('sass');

const result = sass.compile(path.join(__dirname, 'rescources/scss/app.scss'));


app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan('combined'))

//Template engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'rescources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})