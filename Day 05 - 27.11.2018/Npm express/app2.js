const express=require("express");
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let arr=[{"name":"barak"}]
app.get("/getinfo",(req,res)=>
{
    res.status(200); 
    res.send(arr);
}
)
app.listen(4500,()=>console.log("You Listen to port 4500 now"))