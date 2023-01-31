import mongoose, { Schema } from 'mongoose';


const USernameschema  = new Schema({
    username:{required:true,type:String},
    password:{required:true,type:String},
})

const model = mongoose.model('USernameschema', USernameschema);
export const UsernameSchema = model.Schema;
export default model;
   
    
   