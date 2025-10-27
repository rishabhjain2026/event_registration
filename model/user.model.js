const mongoose=require('mongoose');



const userschema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    eventid:{
        type:String
    }
})

module.exports=mongoose.model('register',userschema)