const express = require('express')
const bodypraser= require('body-parser');
const app = express()
const port = 3000

app.use(bodypraser.json());
app.use(bodypraser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    console.log("data mil gya");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
