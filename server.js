const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// const bodyparser

const app = express();

require('dotenv').config()

app.use(logger('dev'));
app.use(express.json());
app.get('/hi', (req, res) => {
    res.send('backend working')
})
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname,'build')));
app.listen(process.env.PORT, () => {
    console.log('Listening on port:', process.env.PORT)
})