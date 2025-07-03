import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authService from "../services/auth.service.js";
import errorHandler from '../utils/error.handler.js';
import { generateToken } from '../utils/jwt.js'

class AuthController{
    async register  (req, res, next)  {
  try {
    const user = await authService.register(req.body);
    const token = generateToken(user._id);
    res.status(201).json({ token, user });
  } catch (error) {
    next(error);
  }
};
    

    async login(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await authService.login(email, password);

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
}

}
export default new AuthController();