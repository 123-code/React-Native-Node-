import USchema  from '../Models/UserSchema.js';
export const createuser = {
    path:'/auth/google/createuser',
    method :'get',
    handler:async(req,res)=>{
        try{
        USchema.create({
            email:req.body.email,
            name:req.body.name,
        })
        }catch(err){
            console.error(err)
        }
    }
}

