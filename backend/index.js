const express=require('express');
const app=express();
const cors=require('cors')
const port = 5000;
const mongoose = require('mongoose');

app.use(cors())
app.use(
    express.urlencoded({
        extended:true
    })
);
app.use(express.json());

const mongoURL="mongodb+srv://kalindu:kalindu@cluster0.buz1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`server is running ${port}`)
})