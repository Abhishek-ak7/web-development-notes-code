/*
Lets start by creating our assignment for today
A website which has 2 endpoints -


POST/signins
Body - {
username: string password: string


GET /users
Headers -
Authorization header
Returns an array of all users if user is signed in (token is correct
Returns 403 status code if not
Returns a json web token with username encrypted
*/



const express=require('express');
const jwt = require("jsonwebtoken");
const jwtPassword="1234";
const port=3000;
const app=express();

app.use(express.json());

const ALL_USER=[
    {
        username: "abhishek@gmail.com",
        password: "123",
        name: "abhishek kumar",
    },
    {
        username: "ak@gmail.com",
        password: "1234",
        name: "abhishek kumar",
    },
     {
        username: "mohit@gmail.com",
        password: "12345",
        name: "abhishek kumar",
    },
];


app.get('/users',(req,res)=>{
    const token=req.headers.authorization;
    const decode=jwt.verify(token,jwtPassword);
    const username=decode.username;
    res.json({
       users: ALL_USER.filter(function(value){
        if(value.username==username) return false;
        else return true;
       })
    });
});
function userCheck(username,password){
    for(let i=0;i<ALL_USER.length;i++){
        if((ALL_USER[i].username==username) && (ALL_USER[i].password==password)) return true;
        else return false;
    }
}
app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userCheck(username,password)){
        res.status(401).json({
            msg: "user not found"
        });
    }
    else{
        const token=jwt.sign({username: username},jwtPassword);
        res.status(200).json({
            token
        });
       
    }

});

app.listen(port,()=>{
    console.log("backend is working");
});
