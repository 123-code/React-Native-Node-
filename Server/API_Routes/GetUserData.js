import USernameschema from '../Models/UsernameSchema.js'
    export const GetUserData = {
    path:'/auth/getuserdata',
    method:'get',
    handler:async(req,res)=>{
        try{
            const UserData = await USernameschema.find();
            res.json(UserData)
        }catch(err){
            console.error(err)
             }
        }
        }