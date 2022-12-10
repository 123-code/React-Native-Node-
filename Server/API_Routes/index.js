import express from 'express';
import { PostSchema } from '../Models/PostSchema';
import { postPost } from './postPostRoute';

const router = express.Router();
// get y post API 


export const routes = [postPost]

   
    /*
 router.post("/sendpost",(req,res)=>{
        const post = new PostSchema({
            nombre:req.body.nombre,
            precio:req.body.precio,
            descripcion:req.body.descripcion
        });
        post.save((data,err)=>{
            if(err){
                console.error(err)
            }
            else{
                res.send(data);
                res.status(200)
                console.log("Datos guardados");
            }
        })
    })



    router.get("/getpost",async()=>{

        try{
const getpost = await PostSchema.find();
res.json(getpost);
        }catch(err){
            console.error(err);
        }
    })
    
    module.exports = ("Routes",router);
    */
