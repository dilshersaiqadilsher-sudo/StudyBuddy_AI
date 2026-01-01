import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app=express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req,res)=>{
 const r=await fetch("https://api.openai.com/v1/chat/completions",{
  method:"POST",
  headers:{
   "Authorization":"Bearer YOUR_OPENAI_API_KEY",
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   model:"gpt-4o-mini",
   messages:req.body.messages
  })
 });

 const data=await r.json();
 res.json({reply:data.choices[0].message.content});
});

app.listen(3000);
