
var express = require('express');
const morgan = require('morgan');
const { engine } = require("express-handlebars");
const path = require('path');
const res = require('express/lib/response');

const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP loger
//app.use(morgan('combined'))

// Home, search, contact

route(app)

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//Action --> Dispathcer --> Function handler

// 127.0.0.1 -   localhost

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
