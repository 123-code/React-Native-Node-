    import USchema from '../Models/UserSchema.js';
    export const GetUserData = {
        path:'/auth/google/getuserdata',
        method:'get',
        handler:async(req,res)=>{
            try{
             const UserData = await USchema.find();
             res.json(UserData)
            }catch(err){
            console.error(err)
            }
            }
            }