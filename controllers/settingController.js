import User from "../components/User.js"
import bcyrpt from "bcrypt"
const changePassword = async(req,res)=>{
try{
const {userId,oldPassword,newPassword} = req.body
const user = await User.findById({_id:userId})
if(!user){
    return res.status(404).json({success:false,error:"User Not Found"})
}
const isMatch = await bcyrpt.compare(oldPassword,user.password)
if(!isMatch){
    return res.status(404).json({success:false,error:"wrong Old Password"})
}
const hashPassword = await bcyrpt.hash(newPassword,10)
const newUser = await User.findByIdAndUpdate({_id:userId},{password:hashPassword})
return res.status(200).json({success:true})
}catch(error){
return res.status(500).json({success:false,error:"Setting Error"})
}
}
export {changePassword}