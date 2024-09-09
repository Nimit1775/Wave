import User from '../models/user.js'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Create a new user
export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        });

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, message: 'User created successfully' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Sign in user
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ensure both email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, message: 'User signed in successfully' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}