const mongoose = require("mongoose")

const userdetailschema = new mongoose.Schema({
    reg:{type:Number,unique:true},
    name:{type:String,require:true},
    cgpa:{type:Number,require:true,unique:true},
    sgpa1:{type:Number,require:true},
    sgpa2:{type:Number,require:true},
    mathsgrade:{type:String,require:true}
  });

const userdetailmodel = mongoose.model("userdetail", userdetailschema);

module.exports = {userdetailmodel,userdetailschema}