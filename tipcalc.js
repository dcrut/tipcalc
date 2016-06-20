const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true } ));

app.listen(3000, function(){
  console.log('Server Started...')
});

app.get('/tipcalc', function(req, res){
  const tips = ['5', '10', '15', '20'];

  res.render('calc', {tips, result: 0});
});

app.post('/tipcalc', function(req, res){
  tip = req.body.tip;

  res.render('calc', {tips, result: 0});
});
