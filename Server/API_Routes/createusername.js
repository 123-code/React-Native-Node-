import USernameschema from '../Models/UsernameSchema.js'
export const CreateUserNameRoute  =  {
    path:'/auth/createusername',
    method:'post',
    handler: async(req,res)=>{
        try{
            const user = new USernameschema({
                username:req.body.username,
                password:req.body.password,
            });
            await user.save((data,err)=>{
                if(err){
                    console.error(err)
                }
                else{
                    JSON.stringify(data)
                    res.send(data);
                    res.status(200)
                    console.log("Datos guardados");
                    console.log(data)
                }
            }) 
        }catch(err){
            console.error(err)
        }


    }}