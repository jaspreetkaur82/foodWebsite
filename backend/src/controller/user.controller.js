import { User } from "../model/user.model.js";

export const Signup = async (req, res) => {

    let { name, email, password } = req.body

    try {
        let newUser = new User({
            name,
            email,
            password
        })



        await newUser.save()
        res.status(201).json({ message: "user register sucessfully", newUser })

    } catch (error) {
        res.status(500).json({ message: "Server ERR", error })

    }



}



export  const Login = async(req,res)=>{
    let {email,password}= req.body

    try {

        const user= await User.findOne({email});
        if (!user){
            return res.status(400).json({message:"User not found",user});
        }

        let match = user.password==password

        if(!match){
            return res.status(400).json({message:"Email or Password not match",match})
        }

        res.status(200).json({message:"Login Sucessfully",user})
        
    } catch (error) {
        res.status(500).json({ message: "Server ERR", error }) 
    }

}











