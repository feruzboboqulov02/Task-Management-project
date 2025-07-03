import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authService from "../services/auth.service.js";
import errorHandler from '../utils/error.handler.js';
import { max } from "mathjs";

class AuthController{
    async register(req, res, next) {
     try {
        const {email,password,username}= req.body;
        const user = await authService.register(username,password,email);
        res.status(201).json({user});
     } catch (error) {
        next(error);
     }
    }
    

    async login (req,res,next){
    try {
        const {username, password} = req.body;
        const data = await authService.login(username,password);
        res.cookie('token', data, {httpOnly: true,maxAge: 24 * 60 * 60 * 1000});
        res.status(200).json({data});
    } catch (error) {
        next(error);
    }
}

}
export default new AuthController();