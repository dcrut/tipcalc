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
  const tips = ['5', '10', '15', '20'];
  const tip = req.body.tip;
  const amount = req.body.amount * 1;
  let r = 0;
  let result = 0;
  // console.log('tip:', tip, 'amount:', amount);

  switch(tips[tip]){
    case '5':
      result = amount * .05;
      break;
    case '10':
      result = amount * .1;
      break;
    case '15':
      result = amount * .15;
      break;
    case '20':
      result = amount * .20;
  }

  //res.render('calc', {tips, amount, result: result});
  res.render('calc', {tips, result: result});
});
