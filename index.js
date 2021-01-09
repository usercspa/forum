const functions = require('firebase-functions');

const express = require('express');

const cons = require('consolidate');

const app = express();

app.engine('hsb', cons.handlesbar);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/forum', function(req, res) {
    res.render('home')
})

exports.app = functions.https.onRequest(app);