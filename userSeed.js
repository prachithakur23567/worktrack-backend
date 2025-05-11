import User from "./components/User.js"
import bcrypt from 'bcrypt';
import connectToDatabase from "./db/mongoose.js";

const userRegister = async()=>{
    connectToDatabase()
    try{
        const hashPassword = await bcrypt.hash("admin",10)
const newUser = new User({
    name:"Admin",
    email:"admin@gmail.com",
    password:hashPassword,
    role:"admint"
})
await newUser.save()
    }
    catch(error)
    {
        console.log(error)
    }
    
}
userRegister();