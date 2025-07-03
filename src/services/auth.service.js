import bcrypt from "bcryptjs";
import User from "../models/User.js";

class AuthService {
  async register({ username, password,email }) {
    if (!username || !password || !email) {
      throw new Error("Username and password are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email,username, password: hashedPassword });
    return user;
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");
    
    return user;
  }
}

export default new AuthService();
