const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const signupschema = new mongoose.Schema({
    name:String,
    email:String,
    reg:{type:Number,unique:true},
    branch:String,
    password:{type:String,unique:true},
    user:{type:String,default:"User"}
  });

signupschema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password,12)
    this.reg = parseInt(this.reg)
    next()
})


const signupmodel = mongoose.model("signup", signupschema);

module.exports = {signupmodel,signupschema}