var express = require('express');
var expressWs = require('express-ws');
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
var cors = require('cors');
var request = require('request');
var moment = require('moment');
const res = require('express/lib/response');
var url = require('url');

var urlencode = require('urlencode');
const { on } = require('events');


const { json } = require('express/lib/response');

const PORT = process.env.PORT || 5000
var app = module.exports = express();
expressWs(app);
// config

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/pictures', express.static(path.join(__dirname, 'pictures')));
app.use('/', express.static(path.join(__dirname, '/')));
app.use(express.urlencoded({ extended: false }))



function isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/;
    if (regPos.test(val)) {
        return true;
    } else {
        return false;
    }
}

if (!module.parent) {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
}