const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const mysql = require('mysql');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static',express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))

const routes = require('./routers');
app.use('/', routes);

app.get('*',(req,res)=>{
  res.render('404')
})
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
