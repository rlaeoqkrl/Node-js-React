const mongoose = require('mongoose');
const express =require('express');  
const app=express(); 
const port=5000;
const { User }=require('./models/User');
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
mongoose.connect('mongodb+srv://daewoong:159324@boiler-plate.xocmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true, 
    useCreateIndex:true,
    useFindAndModify:false  
}).then(()=>console.log('MongoDB connected...'))
  .catch(err=>console.log(err)) 
  app.get('/',(req,res)=>res.send('Hello World!!'))

  app.listen(port,()=>console.log(`Example app listening on port ${port}!`));
app.post('/register',(req,res)=>{
  const user=new User(req.body);
  user.save((err,userInfo)=>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })
})