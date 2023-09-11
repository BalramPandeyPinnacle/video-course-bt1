const express=require("express");
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const courseRoutes=require('./Routes/courseRoutes');
const HttpErrors = require("./Models/httperror");
const app=express();
app.use(bodyParser.json());
app.use('/api/course',courseRoutes);
app.use((req,res,next)=>{
    const errror=new HttpErrors("ErrorMiddleware find Error",404);
    throw next(errror);
})

// app.use("/api/student",)

mongoose
  .connect('mongodb+srv://pinnacle:Pinnacle_2023@videosdata.rslbldm.mongodb.net/courses?retryWrites=true&w=majority')
  .then(() => {
    app.listen(7001);
    console.log("server is running on the port 7001");
  })
  .catch((err) => {
    console.log(err)
  });
