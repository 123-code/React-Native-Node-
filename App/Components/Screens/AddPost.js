import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,Button,Pressable } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';

export default function AddPost(){
    const [Nombre,setNombre] = useState("");
    const [Descripcion,setDescripcion] = useState("");

//axios.post 
    const handleNombreInput = name =>{
setNombre(name);

    }


    const handleDescripcionInput = desc =>{
setDescripcion(desc);
    }

return(
    <>
<View>
    <Text style={styles.text1}> Nombre:</Text>
    <TextInput style={styles.textInput} onChangetext={handleNombreInput} placeholder = "Post"/>

    <Text style={styles.text1}> Descripción:</Text>
    <TextInput style={styles.textInput}  onChangetext={handleDescripcionInput}  placeholder = "Descripción"/>
    
    <Pressable style={styles.button}>
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
