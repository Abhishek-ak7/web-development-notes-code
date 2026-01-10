//middleware and global catches



//1>authentication 
const express = require('express');
const bodyparser=require('body-parser');
const app = express();
const port =3000;

app.use(bodyparser.json());

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username!="abhishek" || password!="pass"){
        res.status(401).json({
            msg : "user not found"
        })
    }else{
        next();
    }
      
};
                        //first middleware .. ham multiple middleware yese hi authentication ke liye ya or kisi kam ke liye lga skte h
app.get("/check-health",userMiddleware,(req,res)=>{
    res.send("health is good");
});

//2>input validation

app.post("/check-health",(req,res)=>{
    const kedneys=req.body.kedneys;
    const TotalKedneys=kedneys.length;
    res.status(200).json({
        msg: TotalKedneys
    })
})

//global catches
app.use((err,req,res,next)=>{
    res.status(401).json({
        msg: "somthing going to roungh"
    })
})
app.listen(port,()=>{
    console.log("express is working");
});

                                        //OR



// const express = require('express');
// const bodyparser=require('body-parser');
// const app = express();
// const port =3000;

// app.use(bodyparser.json());

// app.use((req,res,next)=>{                        //normal use-middleware
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username!="abhishek" || password!="pass"){
//         res.status(401).json({
//             msg : "user not found"
//         })
//     }else{
//         console.log("first middleware")
//         next();
//     }
      
// });
// app.use((req,res,next)=>{
//     console.log("second middleware");
//     next();
// })
                       
// app.get("/check-health",(req,res)=>{
//     res.send("health is good");
// });
// app.listen(port,()=>{
//     console.log("express is working");
// });



