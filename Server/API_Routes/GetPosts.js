import express from 'express';
import  PostSchema  from "../Models/PostSchema";
export const getPost = {
    path:'/api/getPost',
    method:'get',
    handler:async (req,res)=>{
        try{
            const post = await PostSchema.find();
            res.json(post)
           // res.send(post)
        }catch(err){
            console.error(err)
        }
    }
}