import bcrypt from "bcryptjs";
import User from "../models/User.js";
import BaseError from "../utils/error.handler.js";

class AuthService {
  async register({ username, password,email }) {
    if (!username || !password || !email) {
      throw BaseError.BadRequest("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw BaseError.BadRequest("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email,username, password: hashedPassword });
    return user;
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw BaseError.Unauthorized("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw BaseError.BadRequest("Invalid password");
    
    return user;
  }
}

export default new AuthService();
