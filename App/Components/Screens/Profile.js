import React, { useState, useEffect } from 'react';
import { ActivityIndicator,View,Text,StatusBar,StyleSheet, FlatList,Pressable } from 'react-native';
import axios from 'axios';

const App = () => {
    const client = axios.create({
        baseURL: "https://localhost:3500/api" 
      });
  const [userData, setUserData] = useState(null);


  const FetchUserAPI = async(id)=>{
   await client.get(id);
   setUserData(userData.filter((usuario)=>{
    return usuario.id == id;
   })).catch((err)=>{console.error(err)})
  }


  return (
   <View>
    Bienvenid@ 
   </View>
  );
};

export default App; 
   
