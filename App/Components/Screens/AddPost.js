import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,Button,Pressable } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';

const client = axios.create({
    baseURL: "https://localhost:8000/api" 
  });

export default function AddPost(){

   const [post,setpost] = useState({
    Nombre:"",
    Contenido:""
   })

   const postPost = ()=>{
    client.post("",{
        nombre:post.Nombre,
        Contenido:post.Contenido
    }).then((response)=>{
        setpost([response.data,...post]);
    }).catch((err)=>{
        console.error(err);
    })
   }


//axios.post 
return(
    <>
<View>
    <Text style={styles.text1}> Nombre:</Text>
    <TextInput style={styles.textInput} onChangetext={handleNombreInput} placeholder = "Post"/>

    <Text style={styles.text1}> Descripción:</Text>
    <TextInput style={styles.textInput}  onChangetext={handleDescripcionInput}  placeholder = "Descripción"/>
    
    <Pressable style={styles.button} onPress={postPost}>
      <Text style={styles.text}> Agregar </Text>
    </Pressable>

</View>
    </>
)

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
textInput:{
borderWidth:2,
borderColor:colors.DARK,
height:40,
width:250,
borderRadius:12,margin:12
},
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    text1:{
        fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    }
  });
