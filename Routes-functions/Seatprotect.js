const signupmod = require("../Models/Signupmodel");
const bcrypt = require("bcrypt");


const Seatprotect = async (req, res) => {
  try{await signupmod.signupmodel.findOne({
    reg: req.body.reg,
    password: bcrypt.hashSync(req.body.password,12),
    user:"Admin"
  })}catch{
    sendStatus(404)
  }
};

module.exports = {Seatprotect}
