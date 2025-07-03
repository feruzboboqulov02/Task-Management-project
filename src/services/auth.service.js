import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


class AuthService{

    async register(email,password,email){
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new UserModel({email,password:hashedPassword});
        await user.save();
        return user;
    }

    async login(email,password){
        const user = await UserModel.findOne({email});
        if(!user){
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            throw new Error('Invalid password');
        }
        const accessToken = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        return accessToken;
    }


}

export default new AuthService();