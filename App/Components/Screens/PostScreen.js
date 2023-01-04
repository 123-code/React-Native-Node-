//import { StatusBar } from 'expo-status-bar';
// https://gateway03.southcentralus.console.azure.com/n/cc-4ceffcb4/cc-4ceffcb4/proxy/8001/postPost
import React,{useState,useEffect} from 'react';
import { View,Text,StatusBar,StyleSheet } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';

const client = axios.create({
    baseURL: "https://localhost:8000/api" 
  });
 

const PostScreen = ()=>{
    const[post,setpost] = useState({
        Nombre:"",
        Contenido:""
    });

    const [posts,setposts] = useState([])

    const fetchposts = ()=>{
        axios.get(client).then((response)=>{
setposts(response)
        })
    }

useEffect(()=>{
    fetchposts();
})

    return(
        <>
        <StatusBar barStyle='dark-content' backgroundColor={colors.DARK}>
        <View >
<Text> Posts </Text>

        </View>
        </StatusBar>
        <View>
            <Text style={styles.header}> Posts Recientes  </Text>
            {post ?  <h1> {post.title} </h1> : <h1> No hay posts recientes </h1>}
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