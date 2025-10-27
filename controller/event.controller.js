const events=require('../model/event.model')


exports.createvent=async(req,res)=>{
    try {
        const data=req.body;

        if(!data.title || !data.date || !data.location){
            console.log('required field are missing');
            return res.status(404).send('required fields are missing')
        }

        const event=await events.create(data)
        console.log(event);
        res.status(200).send(event)
    } catch (error) {
        console.log(error);
        res.status(500).send('error in creating user',error)
    }
}


exports.getevent=async(req,res)=>{
    try {
        const event=await events.find();
        console.log(event);
        res.status(201).send(event);
        
    } catch (error) {
        console.log('error in geting the event');
        res.status(500).send('error in geting the event',error)
    }
}

exports.geteventbydate=async(req,res)=>{
    try {
        const {date}=req.body;
        const event=await events.find({date:date});
        console.log(event);
        res.status(201).send(event);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error in geting the event by date',error)
    }
}