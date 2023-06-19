const jt = require("jsonwebtoken")

exports.protect = async(req,res,next)=>{
    let token
    try{if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
        const decode = await ( jt.verify(token,"zxchroma"))
        req.body.reg = decode.reg
        next()
    }}catch{
        res.sendStatus(401)
    }
}