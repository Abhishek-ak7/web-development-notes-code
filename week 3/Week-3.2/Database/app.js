const express=require('express');
const mongoose=require('mongoose');
const port=3000;

mongoose.connect("mongodb+srv://abhishek_ak71:MSdhoni7Srk@cluster0.7tkfdmr.mongodb.net/newuser")//connect to database

const User=mongoose.model('user',{//define a model, in which format your data will store 
    username: String,
     name: String, 
     password: String
    });
const app=express();

app.use(express.json());

app.post('/signup',async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const UserExist= await User.findOne({username: username}); // check is user already exist in database?
    if(UserExist){
        return res.status(400).json({
            msg: "user already there"
        });
    }
    const user= new User({  //create user name table
        username: username,
        password: password,
        name: name
    });
    user.save();        //save data to database
    return res.json({
        msg: "user save successfuly"
    })
})

app.listen((port),()=>{
    console.log("backend is working");
})
