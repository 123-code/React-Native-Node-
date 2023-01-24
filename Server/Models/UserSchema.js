import mongoose, { Schema } from 'mongoose';


const USchema  = new Schema({
    nombre:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String},
})

const model = mongoose.model('USchema', USchema);
export const UserSchema = model.Schema;
export default model;
   
    
   

//export default mongoose.model("PostSchema",new schema());