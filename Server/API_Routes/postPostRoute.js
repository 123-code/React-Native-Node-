import  PostSchema  from "../Models/PostSchema";
export const postPost = {
    path:'/api/postPost',
    method:'post',
    handler:async (req,res)=>{
        const post = new PostSchema({
            nombre:req.body.nombre,
            precio:req.body.precio,
            descripcion:req.body.descripcion
        });
        await post.save((data,err)=>{
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
    }
}