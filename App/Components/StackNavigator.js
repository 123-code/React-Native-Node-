import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from './Screens/Intro.js';
import AddPost from './Screens/AddPost';
import PostScreen from './Screens/PostScreen';
import Profile from './Screens/Profile';
import  SignUp from './Screens/SignUp'
import Ingresar from './Screens/Ingresar'
import Gracias from './Screens/Gracias'


const Stack = createNativeStackNavigator();
export default function AppStack (){
    return (//user

<Stack.Navigator>
            <Stack.Screen
            name="signupp"
            component={SignUp} /> 
            <Stack.Screen
            name="ingreso"
            component={Ingresar} /> 
            <Stack.Screen
            name="PostPost"
            component={AddPost}/>
            <Stack.Screen
            name="Gracias"
            component={Gracias}/>
             <Stack.Screen
            name="Posts"
            component={PostScreen}/>  
            <Stack.Screen
              name="Profile"
              component={Profile}/>
          <Stack.Screen
            name="Home"
            component={Intro} />
            
              
          
        </Stack.Navigator>

    );
  };

  /*
  <Stack.Screen
            name="Login"
            component={LoginScreen} />*/