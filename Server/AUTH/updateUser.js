import {getdbconnection} from './db.js';

export const CreateUser = async ({oauthuserinfo}) => {
const {id:googleId,email} = oauthuserinfo;

const db = getdbconnection();
const user = await db.collection
('users').insertOne({googleId,email});

if(user){
    return user;
}

}