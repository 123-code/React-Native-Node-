
import jwt from 'jsonwebtoken';
import {getGoogleuser} from '../util/getgoogleuser';
import {CreateUser} from '../util/createuser';
require("dotenv").config({ path: ".env" });

export const googleOauthCallbackRoute = {
    path:'/auth/google/callback', 
    method:'get', 
    handler:async(req,res)=>{
        const {code} = req.query;
        const oauthUserInfo = await getGoogleuser({code});
        //const updateduser = await CreateUser({oauthUserInfo});
       // const{_id:id,email,info} = updateduser;
        res.redirect(`http://localhost:3001/setpin`);
    }
}