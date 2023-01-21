import { mongoose } from 'mongoose';

let client 
export const initdbconnection = async () => {
    client = mongoose.connect('mongodb://localhost:27017/your-db-name',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

}

export const getdbconnection = () => {
    const db = mongoose.connection;
    return db;
}