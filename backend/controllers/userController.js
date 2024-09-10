import User from '../models/user.js'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import genToken from '../utils/genToken.js';

// Create a new user
export const signup = async (req, res) => {
    try {
        const { name , username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.findOne({ $or: [{ email }, { username }] });
        if(user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword , 
        });
        await newUser.save();

      if(newUser) {
        genToken(newUser._id , res); 
        res.status(201).json({ 
            _id : newUser._id , 
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password ,
            message: 'User created successfully'
         });
      } else {
        res.status(400).json({ error: 'Invalid user data' });
      }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Sign in user
export const signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }) ; 
        const  ismatch = await bcrypt.compare(password, user?.password || "");
        if( !user || !ismatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        genToken(user._id , res);
        res.status(200).json({ 
            _id : user._id , 
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password ,
            message: 'User signed in successfully'
        });

    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// logout 
export const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'User logged out successfully' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
