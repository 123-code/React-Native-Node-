import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions} from 'react-native';
import colors from './misc/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RoundButton from '../RoundButton';
import AddPost from './AddPost';
import PostScreen from './PostScreen';
import LoginScreeen from './test1';

const Stack = createNativeStackNavigator();
export default function IntroStack (){
    return (//user
   
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={LoginScreeen} />
          <Stack.Screen
            name="Home"
            component={Intro} />
          <Stack.Screen
            name="PostPost"
            component={AddPost}/>
             <Stack.Screen
            name="Posts"
            component={PostScreen}/>

        </Stack.Navigator>
  
    );
  };
  

const Intro = ({navigation})=>{
    const [name,setName] = useState("")
    const handleOnChangeText = text=>{
setName(text)
    }



    const handlesubmit = async()=>{
       

        await AsyncStorage.setItem('name1',JSON.stringify(name))
        navigation.navigate('PostPost');
    }
    return(
        <>
        <StatusBar hidden/>
        <View style={styles.container}>
<Text> Ingrese su Nombre para continuar: </Text>
<TextInput value={name} onChangetext={text => handleOnChangeText(text)} placeholder = " Ingrese Su Nombre" style={styles.textInput}/>
{ <RoundButton onPress={handlesubmit} AntIconName='arrowright'/> 
}
        </View>
        </>
    )
}

const width = Dimensions.get('window').width -50;
console.log(width);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
textInput:{
borderWidth:2,
borderColor:colors.PRIMARY,width,
height:40,
borderRadius:12
}
});