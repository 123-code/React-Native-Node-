import USernameschema from '../Models/UsernameSchema.js';

export const DeleteUserDataRoute = {
    path:'/api/deleteuserdata/:id',
    method:'delete',
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