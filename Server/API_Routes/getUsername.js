import USernameschema from '../Models/UsernameSchema.js'

export const GetUsername = {
  path:'/auth/getuserdata/:id',
  method:'get',
  handler:async(req,res)=>{
    try{
      const username = req.params.id;
      const UserData = await USernameschema.findById({ username });
      res.json(UserData)
    } catch (err) {
      console.error(err)
    }
  }
};
/*
router.patch("/updateciudades/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const updated = req.body;
        const options = { new: true };
    
        const result = await ciudadesSchema.findByIdAndUpdate(
            id, updated, options
        )
    
        res.send(result);
    
        }catch(err){
            res.status(400)
            console.error(err);
    
        }


});
*/