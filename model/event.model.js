const mongoose=require('mongoose');
const eventschema=new mongoose.Schema({
    title:{
        type:String
    },
    date:{
        type:Date
    },
    location:{
        type:String
    }
})

module.exports=mongoose.model('event',eventschema);