import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,Button,Pressable,ScrollView  } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoundButton from '../RoundButton';

const client = axios.create({
    baseURL: 'http://172.31.150.215:8000/api/postPost'
  });
  //http://172.31.150.215:8000/api/postPost

  const API_URL = 'http://172.31.150.215:8000/api/postPost'

export default function AddPost({navigation}){
   const [Nombre,setNombre] = useState("");
   const [Contenido,setContenido] = useState(""); 
   const [Precio,setPrecio] = useState(0);
   const [posts,setposts] = useState([]);

 const postPost = async(Nombre,Precio,Contenido)=>{ 

  try{
    const response = await fetch(API_URL,{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(
        {
          nombre:Nombre,
          precio:Precio,
          descripcion:Contenido
        }
      )
     
    })
    const data = await response.json();
    console.log(data);
    
    setposts([response.data, ...posts]);
    setNombre([response.data.Nombre, ...response]);
    setContenido([response.data.Contenido, ...response]);
    setPrecio([response.data.Precio,...response]);
    console.log(response.data);
  }catch(err){
    console.error(err)
  }
 
   };

   const handlesubmit = ()=>{
    navigation.navigate("Gracias");
}


//axios.post 
return (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setNombre(newText)}
        placeholder="Post"
      />

      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setPrecio(newText)}
        placeholder="Precio"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        onChangeText={newText => setContenido(newText)}
        placeholder="Descripción"
        multiline
        numberOfLines={4}
      />

      <Pressable style={styles.button} onPress={() => postPost(Nombre, Precio, Contenido)}>
        <Text style={styles.buttonText}>Agregar</Text>
      </Pressable>

      {/* Consider the RoundButton component usage as needed */}
      {/* <RoundButton onPress={handleSubmit} AntIconName="arrowright" /> */}
    </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: colors.LIGHT_GRAY,
},
scrollContainer: {
  flexGrow: 1,
  padding: 20,
  justifyContent: 'center',
},
label: {
  fontSize: 16,
  fontWeight: 'bold',
  color: colors.BLACK,
  marginBottom: 30,
},
input: {
  borderWidth: 2,
  borderColor: colors.DARK,
  height: 40,
  width: '100%',
  borderRadius: 12,
  paddingHorizontal: 10,
  marginBottom: 50,
},
multilineInput: {
  height: 100,
  textAlignVertical: 'top',
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'black',
  width: '70%',
  alignSelf: 'center',
  marginTop: 20,
  borderRadius: 40,
},
buttonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
},
});