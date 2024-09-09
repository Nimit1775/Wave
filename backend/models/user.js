// user model 
import mongoose from 'mongoose';
const Schema = mongoose.Schema; 

// Create Schema
const UserSchema = new Schema ({ 
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true , 
        min : 6 , 
    },
    email: {
        type: String,
        required: true , 
        
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;