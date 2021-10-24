const express=require("express");
const { MongoClient } = require('mongodb');
const cors=require("cors")
 

const app=express();
const port=process.env.PORT||5000;
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("i love you")
})
const users=[
  {id:0,name:"radha",phone:"14678",gmail:"radha@gmail.com"},
  {id:1,name:"rkita",phone:"43467",gmail:"rikta@gmail.com"},
  {id:2,name:"rimjim",phone:"2435",gmail:"rimjim@gmail.com"},
  {id:3,name:"rumki",phone:"4356",gmail:"rumki@gmail.com"},
  {id:4,name:"rumaa",phone:"0987",gmail:"rumaa@gmail.com"},
]
app.get('/users',(req,res)=>{
  res.send(users)
})

app.get("/users/:id",(req,res)=>{
  const id=req.params.id;
  const user=users[id]
  res.send(user)
})

app.get('/users',(req,res)=>{
  const search=req.query.search;
  if(search){
    const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search))
    res.send(searchResult)
  }
  else{ res.send(user)}
 
})

/* app method for post */
/* ---------------------------- */
app.post('/users',(req,res)=>{
  const newUser=req.body;
  newUser.id=users.length;
  users.push(newUser)
  console.log('heating the post',req.body)
  
  res.json(newUser)

})

/* ----------------------------- */


app.listen(port,()=>{
  console.log("i am listening",port)
})