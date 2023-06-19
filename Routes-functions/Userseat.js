const {userseatmodel} = require("../Models/Userseatmodel")

const postuserseat = async(req,res)=>{
    
    try{
    await userseatmodel.create(req.body)
    res.send("seats filled")
}catch{
    res.sendStatus(404)
}
    
}

const getuserseat = async(req,res)=>{
    const {reg,...rest} = req.body
    const data = await userseatmodel.find(rest)
    res.send(data)
}

module.exports = {postuserseat,getuserseat}