import USernameschema from '../Models/UsernameSchema.js'

export const GetLatestUsername = {
    path: '/auth/getoneuserdata',
    method: 'get',
    handler: async (req, res) => {
      try {
        const UserData = await USernameschema.find().sort({ _id: -1 }).limit(1);
        res.json(UserData[0]);
      } catch (err) {
        console.error(err);
      }
    },
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