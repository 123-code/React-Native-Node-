import express from 'express';
import { PostSchema } from '../Models/PostSchema';
import { postPost } from './postPostRoute';
import { gettest } from './gettest';
import { getPost } from './GetPosts';
import { GetOauthURL } from './GetOauthURL';
import { Createuser } from './createuser';
import { CreateUserNameRoute } from './createusername';
import { GetUserData} from './GetUserData.js';

// get y post API 

export const routes = [
    postPost,
    getPost,
    GetOauthURL,
    CreateUserNameRoute,
    GetUserData,
    
]; 

   
  


