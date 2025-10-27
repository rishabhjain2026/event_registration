const eventcontroller=require('../controller/event.controller')

const express=require('express')
const router=express.Router();

router.post('/events',eventcontroller.createvent);

router.get('/events',eventcontroller.getevent)

router.get('/eventsbydate',eventcontroller.geteventbydate)

module.exports=router;