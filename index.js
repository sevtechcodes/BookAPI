const express =require('express');
const bodyParser= require('body-parser');
const router = require('./routes');
const port = 3013;
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//pug 
app.set('view engine', 'pug');
app.set('views', './views');


//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(router);

app.listen(port, ()=>{console.log(`The app started at ${port}`)});



