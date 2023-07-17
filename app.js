const express=require('express')
const app=express()

app.get("/",async(req,res)=>{
    res.send("Hi there this is node app !!")
})

app.get("/api",async(req,res)=>{
    res.send("Hi there this is api route!!")
})
app.get("/version",async(req,res)=>{
    res.send("Hi there this is version route!!")
})


app.listen(8000,()=>{
    console.log(`server is listening http://localhost:8000`);
})
