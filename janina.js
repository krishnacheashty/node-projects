const express=require('express');
const { MongoClient } = require('mongodb');
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send(" my first love is bad luck")


});


const users=[
  {id:0,name:"rikta",email:"shakira@gmail.com"},
  {id:1,name:"tuli",email:"tuli@gmail.com"},
  {id:2,name:"humayan",email:"jumai@gmail.com"},
  {id:3,name:"rita",email:"rita@gmail.com"}
]
// app.get('/users',(req,res)=>{
//   res.send( users)
// })
app.get('/users',(req,res)=>{
  console.log(req.query)
  const search=req.query.search;
  if(search){
    const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search))
    res.send(searchResult);
  }
  else{
    res.send("users")
  }
})

app.get('/users/:id',(req,res)=>{
  const id=req.params.id;
  const users=users[id];
  res.send(users)
})

/* users:mydblover password:it5zOdnQDva0DaDU */



const uri = "mongodb+srv://mydblover:it5zOdnQDva0DaDU@cluster0.2rqzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("hitting the data base")
  // console.error(error);
  client.close();
});
app.listen(port,()=>{
     console.log("ok  vai bujchi",port)
})