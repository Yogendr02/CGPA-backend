const signupmod = require("../Models/Signupmodel");
const bcrypt = require("bcryptjs");
const jt = require("jsonwebtoken");

const login = async (req, res) => {
  const user = await signupmod.signupmodel.findOne({
    reg: req.body.reg,
  });
  if (user) {
    const compro =  await bcrypt.compare(req.body.password,user.password,)
    if(compro){
      token = jt.sign({ "reg": user.reg },"zxchroma",{expiresIn:"90m"}) 
      res.json({token});    }
  }else{
    res.sendStatus(400)
  }
};

module.exports = {login}
