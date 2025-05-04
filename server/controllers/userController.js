const express = require ('express');
const Userdatabase= require ('../models/userModel')

const userRegister =async (req,res)=>{
    const {Username, Password}= req.body;
    const userRegister = new Userdatabase({ Username, Password});
    await userRegister.save();
    res.send({
        status: 1, 
        msg : "Data saved successfully",
        userRegister
    })
}

const userLogin= async (req,res)=>{
    const {Username, Password}= req.body;
    
    const userLogin= await Userdatabase.findOne({Username, Password});
    
    res.send({
        status: 1, 
        msg : "Data fetched successfully",
        userLogin
    })
}

module.exports={userRegister, userLogin}

