const express= require('express');
const cors=require('cors')
const port=3000;



const app=express();

app.use(express.json());
app.use(cors());

app.post('/addTask',(req,res)=>{
    const task=req.body.task;
    const discription=req.body.discription;
    res.json({
        task: task,
        discription: discription,
    })

})

app.listen((port),()=>{
    console.log("backend is working")
})

