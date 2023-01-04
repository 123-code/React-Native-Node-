//import { StatusBar } from 'expo-status-bar';
// https://gateway03.southcentralus.console.azure.com/n/cc-4ceffcb4/cc-4ceffcb4/proxy/8001/postPost
import React,{useState,useEffect} from 'react';
import { View,Text,StatusBar,StyleSheet } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';
import useAxios from 'axios-hooks'

const client = axios.create({
    baseURL: "http://172.31.170.131:8000/api" 
  });
 

const PostScreen = ()=>{
    const [posts,setposts] = useState([]);
    const [Nombres,setNombres] = useState("");
    const [Precios,setPrecios] = useState();
    const [Descripciones,setDescripciones] = useState("");

    const fetchposts = ()=>{
        axios.get(client).then((response)=>{
setNombres(response.Nombre);
setPrecios(response.Precios);
setDescripciones(response.Descripciones);
console.log("set worked ")
        }).catch((err)=>{
            console.error(err)
        })

    }
    /*
useEffect(()=>{
    fetchposts();
},[])
*/
    return(
        <>
        <StatusBar barStyle='dark-content' backgroundColor={colors.DARK}>
        <View >
<Text> Posts </Text>

        </View>
        </StatusBar>
        <View>
            <Text style={styles.header}> Posts Recientes  </Text>
            {Nombres != "" ?  <Text> {Nombres} </Text> : <Text> No hay posts recientes :( </Text>}
        </View>
        </>
    )
 
}

const styles = StyleSheet.create({
    header:{
        fontSize:25,
        fontWeight:'bold',
    }
 
})

export default PostScreen;


/*
   const styles = StyleSheet.create({
        container:{}
        style={styles.container}
    })
*/