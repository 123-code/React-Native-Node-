import { OauthClient } from "../AUTH/OauthClient";
export const GetOauthURL = {
    path:'/auth/google/url',
    method:'get',
    handler:(req,res)=>{
        const url = OauthClient();
        res.status(200).json({url});
    }
}