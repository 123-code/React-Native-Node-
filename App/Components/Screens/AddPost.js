import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,Button,Pressable } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';

const client = axios.create({
    baseURL: "https://localhost:8000/api/postPost" 
  });


  const API_URL = 'https://localhost:8001/api/postPost'

export default function AddPost(){
   const [Nombre,setNombre] = useState("");
   const [Contenido,setContenido] = useState(""); 
   const [Precio,setPrecio] = useState(0);
   const [posts,setposts] = useState([]);

 const postPost = async(Nombre,Precio,Contenido)=>{ 

  try{
    await fetch(`${API_URL}/private`),{
      method:'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify({
      Nombre:Nombre,
      precio:Precio,
      Contenido:Contenido
      })
    }.then((response)=> response.json())
    .catch((error) => {
      console.error(error);
    });
    
    setposts([response.data, ...posts]);
    setNombre([response.data.Nombre, ...response]);
    setContenido([response.data.Contenido, ...response]);
    setPrecio([response.data.Precio,...response]);
  }catch(err){
    console.error(err)
  }
 
   };


//axios.post 
return(
    <>
<View>
    <Text style={styles.text1}> Nombre:</Text>
    <TextInput style={styles.textInput} onChangeText={newText => setNombre(newText)} placeholder = "Post"/>

    <Text style={styles.text1}> Precio:</Text>
    <TextInput style={styles.textInput}  onChangeText={newText => setPrecio(newText)}  placeholder = "Precio"/>
 
    <Text style={styles.text1}> Descripción:</Text>
    <TextInput style={styles.textInput}  onChangeText={newText => setContenido(newText)}  placeholder = "Descripción"/>
    
    <Pressable style={styles.button} onPress={()=>{postPost(Nombre,Contenido,Precio)}}>
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


  /*
     let response = await client.post('',{
      Nombre:Nombre,
      Contenido:Contenido,
    });
    JSON.decycle(setNombre(response.Nombre));
    JSON.decycle(setContenido(response.Contenido));
  
  */
  