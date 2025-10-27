
const schema12=require('../model/user.model')

exports.registeration=async(req,res)=>{

    try {
        const data=req.body;
        if(!data.name || !data.email){
            console.log('required fields are missing');
            return res.status(404).send('required fields are missing')
            
        }
        
        const eventid=req.params.id;

        const userexist=await schema12.findOne({email:data.email})
        if(userexist){
            console.log('user has already register');
            return res.status(404).send('user with this email is already registered')
        }
        const register=await schema12.create({...data,eventid})

        console.log(register);
        res.status(200).send(register)
        
    } catch (error) {
        console.log(error);
        res.status(404).send('error in registration')
    }
}

exports.getregisteration=async(req,res)=>{
    try {
        const eventid=req.params.id;

        const data=await schema12.find({eventid:eventid})

        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        console.log('error in getting the registered user',error);
        res.status(404).send('error in getting the registered user',error)
    }
}