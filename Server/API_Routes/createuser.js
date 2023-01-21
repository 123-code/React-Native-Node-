import USchema  from '../Models/UserSchema.js';
export const Createuser = {
    path:'/auth/google/createuser',
    method :'get',
    handler:async(req,res)=>{
        try{
        USchema.create({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password,
        })
        }catch(err){
            console.error(err)
        }
    }
}

