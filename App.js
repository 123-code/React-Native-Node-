import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './App/Components/Screens/Intro';
import PostScreen from './App/Components/Screens/PostScreen';
import axios from 'axios';
import AddPost from './App/Components/Screens/AddPost';



export default function App() {
const [user,setuser] = useState({});
  return(
    
<AddPost/>


  ) 
}



/*

const finduser = async()=>{
const result = await AsyncStorage.getItem('user');
console.log(result);
setuser(JSON.parse(result))
}

  useEffect(() => {
    finduser();
  }, []);
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
*/