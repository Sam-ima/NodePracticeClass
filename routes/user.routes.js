const express=require('express');    //express helps to manage server and routes 
const {registration, registerUser, updateUser, login}=require('../controllers/user.controller');
const router=express.Router();

router.post("/login",login);
router.post("/register",registerUser)
router.post("/users",)
router.post("/:id",updateUser);

module.exports=router;