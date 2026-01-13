//middleware and global catches



//1>authentication (basic)
// const express = require('express');
// const bodyparser=require('body-parser');
// const app = express();
// const port =3000;

// app.use(bodyparser.json());

// function userMiddleware(req,res,next){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username!="abhishek" || password!="pass"){
//         res.status(401).json({
//             msg : "user not found"
//         })
//     }else{
//         next();
//     }
      
// };
//                         //first middleware .. ham multiple middleware yese hi authentication ke liye ya or kisi kam ke liye lga skte h
// app.get("/check-health",userMiddleware,(req,res)=>{
//     res.send("health is good");
// });

// //2>input validation

// app.post("/check-health",(req,res)=>{
//     const kedneys=req.body.kedneys;
//     const TotalKedneys=kedneys.length;
//     res.status(200).json({
//         msg: TotalKedneys
//     })
// })

// //global catches
// app.use((err,req,res,next)=>{
//     res.status(401).json({
//         msg: "somthing going to roungh"
//     })
// })
// app.listen(port,()=>{
//     console.log("express is working");
// });

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

//                                                              zod




const express = require('express');
const port=3000;
const bodyParser=require('body-parser');
const { z } = require("zod"); //require 


const app=express();

app.use(bodyParser.json());

function inputValidate(body){    //make function where we built a input schema to check or validate our input
   const userSchema = z.object({
   kidneys: z.array(z.number()).max(2)
   });
    const response = userSchema.safeParse(body);
    console.log(response);
    return response;
}

app.post('/check-health',(req,res)=>{
  const checkInput=inputValidate(req.body);   //call to check valid input or not
  if(!checkInput.success){
    res.status(401).json({
        msg : "input is not valide"
    })
  }else{
    res.status(200).json({
        msg: "all OK"
    })
  }
});

app.listen(port,()=>{
    console.log("backend is working");
});

