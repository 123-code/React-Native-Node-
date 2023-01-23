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

    const LoginClient = axios.create({
      baseURL: 'http://172.31.170.131:8000/auth/google/createuser'
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
      }).then((response)=>
        response.json(),
        setUserInfo(response.data)
      )
    }
// when authenticated function runs 
    useEffect(()=>{
      GetUserData();
    },[Token])

  
    const whenUserAuthenticated = async()=>{
      try{
        axios.post(LoginClient,{
          email:userInfo.email,
          name:userInfo.name,
        })
      }catch(err){
        console.error(err)
      }
    }

   


  return(
    <View style={styles.container}>
      <Text style={styles.text1}> Bienvenido a Payz </Text>
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
    backgroundColor: '#FFFBF0',
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
  text1:{
    fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'green',
},

});




