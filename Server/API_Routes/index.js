import express from 'express';
import { PostSchema } from '../Models/PostSchema';
const router = express.Router();
// get y post API 
export const Routes = ()=>{

    router.post("/sendpost",async(req,res)=>{
        const post = new PostSchema({
            nombre:req.body.nombre,
            poblacion:req.body.poblacion,
        });
        post.save((data,err)=>{
            if(err){
                console.error(err)
            }
            else{
                res.send(data);
                res.status(200)
                console.log("Datos guardados")
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
    
}