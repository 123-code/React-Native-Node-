//import { StatusBar } from 'expo-status-bar';
// https://gateway03.southcentralus.console.azure.com/n/cc-4ceffcb4/cc-4ceffcb4/proxy/8001/postPost
import React,{useState} from 'react';
import { View,Text,StatusBar,StyleSheet } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';

const client = axios.create({
    baseURL: "https://localhost:3500/api" 
  });
 

const PostScreen = ()=>{
    const[post,setpost] = useState({
        Nombre:"",
        Contenido:""
    });


 
    return(
        <>
        <StatusBar barStyle='dark-content' backgroundColor={colors.DARK}>
        <View >
<Text> Posts </Text>

        </View>
        </StatusBar>
        <View>
            <Text style={styles.header}> Posts Recientes  </Text>
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