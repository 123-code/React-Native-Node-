import mongoose, { Schema } from 'mongoose';

//const schema = mongoose.Schema;

const PSchema  = new Schema({
    nombre:{required:true,type:String},
    precio:{required:true,type:Number},
    descripcion:{required:true,type:String},
})

const model = mongoose.model('PostSchema', PSchema);
export const PostSchema = model.Schema;
export default model;
   
    
   

//export default mongoose.model("PostSchema",new schema());