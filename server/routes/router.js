const express = require("express");
const router = new express.Router();

const userdb= require("../models/userSchema")


//for user registration
router.post("/register",async(req,res)=>{
    const{fname,email,password,cpassword} = req.body;
    if(!fname || !email || !password || !cpassword){
        res.status(422).json({error:"Fill all the details"})
    }
    try{
        const preuser = await userdb.findOne({email:email});

        if(preuser){
            req.status(422).json({error:"This email is already registered"})
        }else if(password != cpassword){
            req.status(422).json({error:"Passwords don't match"})
        }
        else{
            const finalUser = new userdb({
                fname,email,password,cpassword
            });

            const storedata = await finalUser.save();
        }
    }
    catch(error){
        res.status(422).json(error);
        console.log("catch block error")
    }
});

module.exports = router;