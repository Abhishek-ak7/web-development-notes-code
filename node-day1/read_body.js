const express = require('express');
const bodypraser= require('body-parser');
const app = express();

app.use(bodypraser.json());
app.use(bodypraser.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    console.log(req.body);
    console.log("data mil gya");
})