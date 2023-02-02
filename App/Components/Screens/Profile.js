import React, { useState, useEffect } from 'react';
import { ActivityIndicator,View,Text,StatusBar,StyleSheet, FlatList,Pressable,TextInput,Alert } from 'react-native';
import axios from 'axios';
//import CheckBox from 'react-native-check-box'
const App = () => {
  const [userData, setUserData] = useState(null);
  const [nuevousuario,setnuevousuario] = useState(null);
  const [UserID,setUserID] = useState(null);
  

  const GetUserNameURL = 'http://172.31.150.215:8000/auth/getoneuserdata';
  const DeleteUserNameURL = 'http://172.31.150.215:8000/api/deleteuserdata/:id';
  const UpdateProfileURL = 'http://172.31.150.215:8000/api/updatedata/:id';

//passwords deberian guardarse aparte. 
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(GetUserNameURL);
        setUserData(response.data.username);
        setUserID(response.data._id);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);

  const DeleteuserData = async({id})=>{
    try{
      await axios.delete(`http://172.31.150.215:8000/api/deleteuserdata/:${id}`);
      Alert.alert("Tu perfil ha sido eliminado!");
    }
    catch(err){
      console.error(err);
      Alert.alert("Tu perfil ha sido eliminado!");
    }
  }


const UpdateUserData = async({id})=>{
  try{
    await axios.put(`http://172.31.150.215:8000/api/updatedata/:${id}`);
    Alert.alert("Tu perfil ha sido actualizado!");
  }
  catch(err){
    console.error(err);
    Alert.alert("Error de actualizacion");
  }
}


  return (
    <>
      {userData ? (
        <View style={{  flex: 1, padding: 24 ,backgroundColor: '#FFFAFA'}}> 
          <Text style={styles.greentext}>Tu Perfil,  {userData}</Text>
          <Text style={styles.blacktext}> {"\n"} Editar Perfil {"\n"} {"\n"} </Text>

          <Text style={styles.blacktext}>  Nuevo Nombre de usuario {"\n"} </Text>
          <TextInput
        style={styles.input}
        placeholder="Editar Usuario"
        onChangeText={(text) => console.log("hola")}
        />

<Text style={styles.blacktext}>  Agregar Email {"\n"} </Text>
          <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => console.log("hola")}
        />

<Text style={styles.blacktext}>  Número Celular {"\n"} </Text>
          <TextInput
        style={styles.input}
        placeholder="Celular"
        onChangeText={(text) => setnuevousuario(text)}
        />
<Text>{"\n"}</Text>
<Pressable style={styles.redbutton}>
<Text style={styles.alltext} onPress={()=>{DeleteuserData(UserID)}}> Eliminar Perfil </Text>
</Pressable>
<Text> {"\n"} </Text>
<Pressable style={styles.redbutton}>
<Text onPress={UpdateUserData(userData.id)} style={styles.alltext}> Actualizar Datos  </Text>
</Pressable>

        </View>
      ) : (
        <Text style={styles.alltext}>No user data</Text>
      )}
    </>
  );
};


const styles = StyleSheet.create({
  header:{
      fontSize:25,
      fontWeight:'bold',
      
      
  },
  bigBlue: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily: 'Futura',
    },
    text:{
      color:"#708090",
      
    },
    alltext:{
    
        fontFamily: 'Futura',
        fontSize: 16,
        color: 'white',
      
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      fontFamily: 'Futura',
      borderRadius: 25,
    },
    greentext:{
      color:"green",
      fontFamily: 'Futura',
      fontWeight:"bold",
      fontSize: 20,
  },
  blacktext:{
    color:"black",
    fontFamily: 'Futura',
    fontWeight:"bold",
    fontSize:16
},
    posttext:{
    
      fontFamily: 'Futura',
      fontSize: 16,
      color: 'black',

    
  },
    buttontext:{
      color:"white",
      
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFBF0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginRight: 70,
      marginLeft: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    redbutton: {
      marginRight: 70,
      marginLeft: 70,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'red',
    },
    signinbutton:{
      paddingTop:20,
      paddingBottom:20,
      color:'#fff',
      textAlign:'center',
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      position: 'absolute',
      bottom: 0
  },
    footer: {
      backgroundColor: '#eee',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitbtn: {
      marginRight: 130,
      marginLeft: 130,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      textAlign: 'center',
      alignItems: 'center',
    },
})

export default App;