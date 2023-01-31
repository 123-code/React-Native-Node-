  //import { StatusBar } from 'expo-status-bar';
  // https://gateway03.southcentralus.console.azure.com/n/cc-4ceffcb4/cc-4ceffcb4/proxy/8001/postPost
  import React,{useState,useEffect} from 'react';
  import { ActivityIndicator,View,Text,StatusBar,StyleSheet, FlatList,Pressable } from 'react-native';
  import colors from './misc/colors';
  import axios from 'axios';
  import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
  import { useNavigation } from '@react-navigation/native';
  import { NavigationContainer } from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import localStorage from 'localstorage-polyfill'; 

  const baseURL =  "http://172.31.170.131:8000/api/getPost";
  const LoginDataURL = 'http://172.31.170.131:8000/auth/google/createuser';
    
  const Stack = createNativeStackNavigator();

 
  

  const PostScreen = ()=>{
  const [loading,setloading] = useState(true);
  const [postvalues,setpostvalues]= useState({
      Nombre:'',
      Precio:0,
      Contenido:'',

  });
  const navigation = useNavigation();
  const [data,setData ] = useState([]);
  const [SignInButtonText,SetSignInButtonText] = useState();
  const [Token,setToken] = useState();
  const [userData,setUserData] = useState();
  const [userName,setUserName] = useState('');
 
      useEffect(() => {
          fetchposts();
    }, []);

//GET UsuarioData API call  
const fetchUserData = async()=>{
  try{
   const res = await fetch('192.168.1.3:8000/auth/getuserdata');  
   const json = await res.json();
   setUserName(json.username);
   console.log(json.username) ;
  }catch(err){
    console.error(err);
  }
}



      const fetchposts = async ()=>{
          try{
              const response = await fetch(baseURL);
              const json = await response.json();
        
              setData(json)
              console.info("i")
              setloading(false)
          }catch(err){
              console.error(err);
          }
        }



  const PostButton = ()=>{
    return(
      <View>
        <Text style = {styles.alltext} >Tu negocio, a la vista de todos </Text>
        <Pressable style = {styles.button} onPress={()=>{navigation.navigate('PostPost')}}>
          <Text style = {styles.alltext}>Promociona YA </Text>
          </Pressable>
      </View>
    )

  } 
  return (
      <>
      
      <View style={{ backgroundColor: '#3CB371',padding:5}}> 
      <View>
      <Text style = {styles.bigBlue}>
          Posts Recientes 
          </Text>
          {PostButton()}
          <Pressable style = {styles.submitbtn} onPress={()=>{navigation.navigate('Login')}}>
          {Token ?   <Text style = {styles.alltext}>  </Text> : <Text style = {styles.alltext}>Iniciar Sesión </Text>}
          </Pressable>
      </View>
     
      </View>

     
      <View style={{ flex: 1, padding: 24 ,backgroundColor: '#FFFAFA'}}>
        {loading ? ()=>{<ActivityIndicator/>} : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.nombre}, {item.precio}, {item.descripcion}</Text>
            )}
          />
        )}
        
      </View>
      </>
    );
  
  }

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
        signinbutton:{
          paddingTop:10,
          paddingBottom:10,
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

  export default PostScreen;
