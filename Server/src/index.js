import express from 'express';
import mongoose from 'mongoose';
import  { MongoClient, ServerApiVersion }from 'mongodb';
import  {routes}  from  '../API_Routes';
import cors from 'cors';
import http from 'http';
import https from 'https';
import fs from 'fs';
const key = fs.readFileSync('./Security/localhost.decrypted.key');
const cert = fs.readFileSync('./Security/localhost.crt');

const main = async()=>{
    
    const port = 8001   
    const password  = encodeURIComponent("JoseNaranj0!");
    const url = 'mongodb://127.0.0.1:27017/catalogo';
    /*
    const privateKey = fs.readFileSync('sslcert/server.key','utf8');
    const certificate = fs.readFileSync('sslcert/server.cert','utf8');
    const credentials = {key:privateKey,cert:certificate};
    */
//`mongodb+srv://naranjojose256:J${password}@cluster0.anb85.mongodb.net/?retryWrites=true&w=majority`
    //mongodb://127.0.0.1:27017/paisesyc
    const server = express();
   
    
    server.use(express.json());
    server.use(cors());

   // server.use('/api', Routes);



const DatabaseC = ()=>{
       
    const uri = url;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });


}
try{
    DatabaseC();
    console.log("Connected To MongoDB")
}catch(err){
    console.error(err);
}


routes.forEach(route => {
    server[route.method](route.path, route.handler);
});

//const Server = https.createServer({key,cert},server);
server.listen(port,()=>{
        console.log('servidor en puerto 8001')
    });


 

}

try{
    main();
}catch(err){
    console.err(err);
}