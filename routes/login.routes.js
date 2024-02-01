const express=require('express');

const router=express.Router();

const {authenticate}=require('../controllers/login.controllers');

router.post("/",authenticate);


// router.patch("./login",authenticate);
// router.put("./login",authenticate);
// router.delete("./login",authenticate);
module.exports=router;