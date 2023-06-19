const mongoose = require("mongoose")

const userseatschema = new mongoose.Schema({
    reg:{type:Number,unique:true},
    opt1:String,
    opt2:String,
    opt3:String
    
  });

const userseatmodel = mongoose.model("userseat", userseatschema);

module.exports = {userseatmodel,userseatschema}