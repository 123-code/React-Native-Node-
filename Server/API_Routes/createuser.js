import USchema  from '../Models/UserSchema.js';
export const Createuser = {
    path:'/auth/google/createuser',
    method :'post',
    handler:async(req,res)=>{
        try{
        USchema.create({
            email:req.body.email,
            name:req.body.name,
            googleId:req.body.googleId,
            imageUrl:req.body.imageUrl
         
        })
        }catch(err){
            console.error(err)
        }
    }
}

