const express = require('express');
const bodyparser=require('body-parser');
const app = express();
const port =3000;

app.use(bodyparser.json());
app.use((req,res,next)=>{
    
    console.log("auth check middleware",req.body.name)
    next(   )
})

app.use((req,res,next)=>{
    console.log("health check middleware")
    // console.log(req)
    next()
})
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(express.text({ type: "*/*" }));

app.get('/check-health',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    if(username!="abhishek" || password!="pass"){
        res.status(401).json({
            msg : "user not found"
        })
        return;
    }
        res.status(200).json({
            msg: "your health is fine"
        })
});
app.post('/check-health',(req,res)=>{
    //lenth of kedneys
    console.log(req.body);
    res.status(200).json({msg:" recived"});
})
app.use(()=>{
    console.log("final error check middleware")
})


app.listen(port,()=>{
    console.log("express is working");
});


// const express = require("express");
// const app = express();
// const port = 3000;

// // RAW BODY AS TEXT
// app.use(express.text({ type: "*/*" }));

// app.post("/check-health", (req, res) => {
//   console.log("Headers:", req.headers);
//   console.log("Raw Body:", req.body);

//   res.status(200).send("received");
// });

// app.listen(port, () => {
//   console.log("express is working");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {

//   if (req.method === "POST" && req.url === "/check-health") {

//     let rawData = "";

//     req.on("data", (chunk) => {
//         console.log(chunk)
//           console.log(chunk.toString());  
//       rawData += chunk;
//     });

//     req.on("end", () => {

//       console.log("RAW BODY (server console):", rawData);

//       // Response jo Postman me dikhega
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Server received your data: " + rawData);
//     });

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }

// });

// server.listen(3000, () => {
//   console.log("Node.js server running on port 3000");
// });

