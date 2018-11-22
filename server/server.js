const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const routes = require('./routes/index');

const app = express();

const port = process.env.PORT || 8089


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1', routes)

app.get('/', (req, res) => {
    res.send("This crap does work");
})

app.listen(port, e => console.log(`works in port ${port}`));