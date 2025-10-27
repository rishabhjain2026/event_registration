const express=require('express')
const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
const app=express();

app.use(express.json());

const event=require('./router/event.router')
const register=require('./router/register.router')

app.use('/v1',event)
app.use('/v2',register)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log('error in connecting database',err);
})

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`lisening to port ${port}`);
})