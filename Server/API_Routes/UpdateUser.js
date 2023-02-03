import {USernameschema} from '../Models/UsernameSchema.js';
export const UpdateProfile = {
    path:'/api/updatedata/:id',
    method:'put',

    handler: async(req,res)=>{
        try{
            const id = req.params.id;
            const updated = req.body;
            const options = { new: true };
        
            const result = await USernameschema.findByIdAndUpdate(
                id, updated, options
            )
        
            res.send(result);
        
            }catch(err){
                res.status(400)
                console.error(err);
        
            }
    }
}
