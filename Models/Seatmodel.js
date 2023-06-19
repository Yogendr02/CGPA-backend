const mongoose = require("mongoose")

const seatschema = new mongoose.Schema({
    reg:{type:Number},
    CSE:{type:Number},
    ECE:{type:Number},
    EEE:{type:Number},
    Chemical:{type:Number},
    Mechanical:{type:Number},
    Civil:{type:Number},
    Biotechnology:{type:Number}
  });

const seatmodule = mongoose.model("seat", seatschema);

module.exports = {seatmodule,seatschema}