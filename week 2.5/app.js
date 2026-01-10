const express=require('express');
const app=express();
const port=3000;

function calculateSum(n){
    let sum=0
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

app.get("/",(req,res)=>{
    let n=req.query.n;
    let ans=calculateSum(n);
    res.send("Your ans is"+ans);
})

app.listen(port, ()=>{
    console.log("start");
});