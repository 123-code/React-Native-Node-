import mongoose from 'mongoose';

const schema = mongoose.Schema;

export const PostSchema = new schema({
    nombre:{required:true,type:String},
    precio:{required:true,type:Number},
})