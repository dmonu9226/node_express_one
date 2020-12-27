const express = require('express')
const app = express();
app.get('/',(req,res)=>res.send("Welcome to NodeExpress"));
app.get('/test',(req,res)=>res.send('Test Url'))
app.listen('3000',()=>console.log('Liistening port on 3000'));