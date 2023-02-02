import express from 'express';
import { PostSchema } from '../Models/PostSchema';
import { postPost } from './postPostRoute';
import { gettest } from './gettest';
import { getPost } from './GetPosts';
import { GetOauthURL } from './GetOauthURL';
import { Createuser } from './createuser';
import { CreateUserNameRoute } from './createusername';
import { GetUserData} from './GetUserData.js';
import { GetLatestUsername } from './GetUsername.js';
//import { DeleteUserDataRoute } from './deleteUserData.js';
//import {UpdateProfile} from './UpdateUser.js';
import USernameschema from '../Models/UsernameSchema.js';

// get y post API 

export const routes = [
    postPost,
    getPost,
    GetOauthURL,
    CreateUserNameRoute,
    GetUserData,
    GetLatestUsername,
    
    
]; 

export const DeleteUserDataRoute = {
    path:'/api/deleteuserdata/:id',
    method:'DELETE',
    handler: async(req,res)=>{
        try{
            const id = req.params.id;
            await USernameschema.findByIdAndRemove(id);
            res.json({message:"User Deleted"})  
            res.status(200);
        }catch(err){
            console.error(err);
            res.status(500);
        }

    }
}

   
  


