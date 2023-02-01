import React, { useState, useEffect } from 'react';
import { ActivityIndicator,View,Text,StatusBar,StyleSheet, FlatList,Pressable } from 'react-native';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/auth/getuserdata');
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      {userData ? (
        <View> 
          <Text>Vendedor: {userData.username}</Text>
        </View>
      ) : (
        <Text>No user data</Text>
      )}
    </>
  );
};

export default App;