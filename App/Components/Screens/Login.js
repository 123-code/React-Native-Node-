import {StatusBar} from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,Button,Pressable} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import PostScreen from './PostScreen';
//import bcrypt from 'bcrypt';


  export default function LoginScreen({navigation}){
    const [Token,setAccesstoken] = useState();
    const [userInfo,setUserInfo] = useState();
    const [req,res,prompt] = Google.useAuthRequest({
      androidClientId:'133427487604-9b9b5usg2hh8rl9iu2gs0adel4p80emv.apps.googleusercontent.com',
      iosClientId:'133427487604-fckojm1va3kssread96bbj03grb2m953.apps.googleusercontent.com',
      expoClientId:'133427487604-4m0i8svjekh6iqqb90sq42a5vagp9ec7.apps.googleusercontent.com',
    });


    useEffect(()=>{
      if(res?.type === 'success'){
        setAccesstoken(res.authentication.accessToken);
      }
    },[res])

    const GetUserData = async()=>{
      let userData = await fetch('https://www.googleapis.com/userinfo/ve/me',{
        headers:{
          Authorization:`Bearer ${Token}`
        }
      })

    }

    const whenUserAuthenticated = async()=>{
      /*
      try{
        const data = await axios.post('http://172.31.170.131:8000/auth/google/createuser')
        const response = await data.json();
        console.log(response)

      }catch(err){
        console.error(err)
      }
      */
    }

    const ShowUserData = async()=>{
      if(userInfo){
        return(
          <View>
            <Image source={{uri:userInfo.picture}}/>
            <Text>Bienvenido {userInfo.name}</Text>
          </View>
        )
      }
    }


  return(
    <View style={styles.container}>
<Pressable style={styles.button}  
onPress = {Token ? whenUserAuthenticated : ()=> prompt({useProxy:true,showInRecents:true})}
>  
<Text style={styles.buttonText}> {Token ? "Registrarse" : "Iniciar Sesión con Google"}  </Text>
</Pressable>
</View>
  ) 
}
//title={Token ? "Registrarse " : "Iniciar Sesion"} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#4285f4',
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    
  },
});




