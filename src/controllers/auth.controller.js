import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    const {username, password, email,isAdmin} = req.body;

    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
        username,
        password: hashedPassword,
        email,
        isAdmin
    })
    await user.save();
    res.status(201).json({message: "User created successfully"});
}

const login = async (req,res) =>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return next(new Error('The User is not found'));
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return next(new Error('Invalid password'));
    }
    const accessToken = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    res.status(200).json({accessToken});
}

export{ register, login };