const express= require('express');
const cors=require('cors')
const port = 3000;

const app=express();

app.use(express.json());

app.use(cors());

app.post('/SI',(req,res)=>{
   const P=req.body.P;
   const R=req.body.R;
   const T=req.body.T;
   const SI=(P*R*T)/100;
  res.json({
    SI: SI
  })
    
});

app.listen((port),()=>{
    console.log("backend is working")
})