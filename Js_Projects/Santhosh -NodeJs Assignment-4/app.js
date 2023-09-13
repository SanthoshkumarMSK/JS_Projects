const fs = require('fs');
const express = require('express');
const app = express();



app.use("/",express.static("Public"))
 
app.get("/buddylist",(req,res)=>{

fs.readFile("./data/BuddyList.json","utf8",(err,data)=>{
 if(err){
     console.error(err);
     res.status(500).json({error:"internal server Error"})
 }
 else{
     let user = JSON.parse(data)
     res.status(200).json(user,null,4);
 }
  
})
})

app.listen(8080,()=>{
    console.log(`Sever is Runningon port 8080`);
})



