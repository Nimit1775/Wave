// user model 
import mongoose from 'mongoose';
import { array, string } from 'zod';
const Schema = mongoose.Schema; 

// Create Schema
const UserSchema = new Schema ({ 
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true , 
        unique  : true  , 
    },
    password: {
        type: String,
        required: true , 
        min : 6 , 
    },
    email: {
        type: String,
        required: true , 
        unique : true ,
        
    } , 
    profilepic: {
        type: String ,
        default : "" , 
    } ,
    followers : {
        type : [String] , 
        default : [] ,  

    } , 

    following : {
        type : [String], 
        default : [] , 
    } ,
    
    bio : {
        type : String , 
        default : "" , 
    
    } , 
    
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;