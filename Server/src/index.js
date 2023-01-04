import express from 'express';
import mongoose from 'mongoose';
import  { routes }  from  '../API_Routes';
import cors from 'cors';

    const port = 8000;
    const url = "mongodb://127.0.0.1:27017/catalogo";
    const server = express();
    server.use(express.json());
    server.use(cors());
   // server.use('/api', Routes);
   routes.forEach(route => {
    server[route.method](route.path, route.handler);
});


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


 


