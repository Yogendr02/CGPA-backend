const signupmod = require("../Models/Signupmodel")
const jt = require("jsonwebtoken")

const signup = async(req,res)=>{
    try{await signupmod.signupmodel.create({
        name:req.body.name,
        email:req.body.email,
        reg:req.body.reg,
        branch:req.body.branch,
        password:req.body.password,
        user:"User"
    })
    const token = jt.sign({reg:req.body.reg},"zxchroma",{expiresIn:"120m"})
    res.json({
        token
    })}catch{
        res.sendStatus(403)
        
    }
}

module.exports = {signup}

