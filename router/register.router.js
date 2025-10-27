const registercontroller=require('../controller/register.controller')

const express=require('express')
const router=express.Router();

router.post('/register/:id',registercontroller.registeration);

router.get('/register/:id',registercontroller.getregisteration)

module.exports=router;