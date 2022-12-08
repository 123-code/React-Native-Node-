import express from 'express';
import mongoose from 'mongoose';
import { Routes } from  '../API_Routes';

const main = async()=>{
    const port = 8000;
    const url = "mongodb://127.0.0.1:27017/catalogo";
    const server = express();
    server.use('/api', Routes);

server.get("/",(req,res)=>{
res.send("Hola");
})


const DatabaseC = async()=>{
       
    const client = await mongoose.connect(url).then(()=>{
        console.log("connected to MongoDB")
    }).catch(error=>{console.error(error)})

console.log("connected");
}

DatabaseC();

    server.listen(port,()=>{
        console.log('servidor en puerto 8000')
    });


 

}

try{
    main()
}catch(err){
    console.err(err);
}