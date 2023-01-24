import {StatusBar} from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,Button,Pressable,Image} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import PostScreen from './PostScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import bcrypt from 'bcrypt';


  export default function LoginScreen({navigation}){
    const [Token,setAccesstoken] = useState();
    const [userInfo,setUserInfo] = useState([]);
    const [Auth,setAuth] = useState();
    const [req,res,prompt] = Google.useAuthRequest({
      androidClientId:'133427487604-9b9b5usg2hh8rl9iu2gs0adel4p80emv.apps.googleusercontent.com',
      iosClientId:'133427487604-fckojm1va3kssread96bbj03grb2m953.apps.googleusercontent.com',
      expoClientId:'133427487604-4m0i8svjekh6iqqb90sq42a5vagp9ec7.apps.googleusercontent.com',
    },{
      accessTokenExpiry: 3600,
      "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA"
    });

    const LoginClient = axios.create({
      baseURL: 'http://172.31.170.131:8000/auth/google/createuser'
    });

 
    useEffect(()=>{
      if(res?.type === 'success'){

        setAuth(res);
        const PersistToken = async()=>{
          await AsyncStorage.setItem("auth",JSON.stringify(res));
        };
        PersistToken();
      }
    },[res])

    useEffect(()=>{
      const getUserToken = async()=>{
const JsonValue = await AsyncStorage.getItem("auth")
if (JsonValue != null){
  setAuth(JSON.parse(JsonValue));
  console.log(Auth)
}
      }
      getUserToken()
    },[])


   const GetuserData = async()=>{
    let UserInfoResponse =   await fetch('https://www.googleapis.com/oauth2/v2/userinfo',
    {
      headers:{Authorization:`Bearer ${Auth.accessToken}`}
    })
    UserInfoResponse.json().then(data=>{
      console.log("Data",data)
      setUserInfo(data)
    })
   }
     
 
// 

const ShowUserData = ()=>{
  if(userInfo){
    return(
      <View>  
        <Image source={{uri:userInfo.picture}}></Image>
        <Text> Bienvenido {userInfo.name} </Text>
        <Text> {userInfo.email} </Text>
      </View>
    )
  }
}

    const PostUserData = async()=>{
      try{
        await axios.post(LoginClient,{
          email:userInfo.email,
          name:userInfo.name,
          imageUrl:userInfo.picture,
          googleId:userInfo.sub,
        })
      }catch(err){
        console.error(err)
      }
    }
 
  return(
    <View style={styles.container}>
      {ShowUserData()}
      <Text style={styles.text1}> Bienvenido a Payz </Text>
<Pressable style={styles.button}  
onPress = {Auth ?  GetuserData  : ()=> prompt({useProxy:true,showInRecents:true})}>  
<Text style={styles.buttonText}> {Auth ? " ": "Iniciar Sesión con Google"}  </Text>
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
Picture:{
  width:50,
  height:50
}

});




