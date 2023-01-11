import express from 'express';
import { PostSchema } from '../Models/PostSchema';
import { postPost } from './postPostRoute';
import { gettest } from './gettest';
import { getPost } from './GetPosts';
import { GetOauthURL } from './GetOauthURL';


// get y post API 

export const routes = [postPost,
    getPost,
    GetOauthURL
];

   
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
