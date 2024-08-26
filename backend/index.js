const express=require('express');
const app=express();
const cors=require('cors')
const port = 5000;
const mongoose = require('mongoose');
const UserModel = require('./models/Users');


app.use(cors())
app.use(
    express.urlencoded({
        extended:true
    })
);
app.use(express.json());
//connect to the database
const mongoURL="mongodb+srv://kalindu:kalindu@cluster0.buz1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/crud";

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  //api for new record

  app.post('/createUser',async(req,res)=>{
    UserModel.create(req.body)
    .then(Users=>res.json(Users))
    .catch(err=>res.json(err))
    ;
  
  })


app.listen(port, () => {
  console.log(`server is running ${port}`)
})