import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './App/Components/Screens/Intro';
import PostScreen from './App/Components/Screens/PostScreen';
import axios from 'axios';
import AddPost from './App/Components/Screens/AddPost';
import Login from './App/Components/Screens/Login';
import LoginScreeen from './App/Components/Screens/test1';
import AppStack from './App/Components/StackNavigator';



export default function App() {
const [user,setuser] = useState({});
  return(
    <NavigationContainer>
     <AppStack/>
    </NavigationContainer>
  ) 
}
