import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from './Screens/Intro.js';
import AddPost from './Screens/AddPost';
import PostScreen from './Screens/PostScreen';
import LoginScreen from './Screens/Login';


const Stack = createNativeStackNavigator();
export default function AppStack (){
    return (//user

<Stack.Navigator>
            <Stack.Screen
            name="Posts"
            component={PostScreen}/>  
            <Stack.Screen
            name="Login"
            component={LoginScreen} />
            <Stack.Screen
            name="PostPost"
            component={AddPost}/>
          <Stack.Screen
            name="Home"
            component={Intro} />
        </Stack.Navigator>

        
  
    );
  };