// post model 
import mongoose from 'mongoose';
import { number } from 'zod';
const Schema = mongoose.Schema; 

const PostSchema = new Schema  ({
   postedBy :{
         type : Schema.Types.ObjectId , 
         ref : 'User' , 
         required : true ,
    },

   text : {
            type : String , 
            required : true , 
            maxlength : 500 ,
        },
    img  : {
        type : String ,
    } , 
    likes :{
        type : number  , 
        default : 0 , 
    } , 
    replies  : [
        {
            userId : {
                type : Schema.Types.ObjectId , 
                ref : 'User' , 
                required : true ,
            },
            text : {
                type : String , 
                required : true , 
                maxlength : 500 ,
            },
            userProfilepic: {
                type : String ,
            
            },
            username : {
                type : String , 
                required : true ,
            },
        }
    ]
   

})