import express from 'express';

export const gettest = {
    path:"/get",
    method:'GET',
    hendler:(req,res)=>{
        res.send("Hola");
    }

}