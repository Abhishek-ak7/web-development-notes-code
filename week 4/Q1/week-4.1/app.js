const express=require('express');
const cors=require('cors');
const port=3000;

const app=express();

app.use(express.json());

app.use(cors());

app.post('/add',(req,res)=>{
    const num1=req.body.value1;
    const num2=req.body.value2;
    const sum=parseInt(num1)+parseInt(num2);
    res.json({
        sum: sum
    });
})

app.listen((port),()=>{
    console.log("backend is working")
})