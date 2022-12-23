import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions} from 'react-native';
import colors from './misc/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RoundButton from '../RoundButton';
import AddPost from './AddPost';

const Stack = createNativeStackNavigator();
export default function IntroStack (){
    return (
   
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Intro} />
          <Stack.Screen
            name="PostPost"
            component={AddPost}/>
        </Stack.Navigator>
  
    );
  };
  

const Intro = ({navigation})=>{
    const [name,setName] = useState()
    const handleOnChangeText = text=>{
setName(text)
    }



    const handlesubmit = async()=>{
        const user = {
            name: name
        }   

        await AsyncStorage.setItem('user',JSON.stringify(user))
        navigation.navigate('PostPost');
    }
    return(
        <>
        <StatusBar hidden/>
        <View style={styles.container}>
<Text> Ingrese su Nombre para continuar: </Text>
<TextInput value={user} onChangetext={handleOnChangeText} placeholder = " Ingrese Su Nombre" style={styles.textInput}/>
{user.trim().length > 3 ?( <RoundButton onPress={handlesubmit} AntIconName='arrowright'/> ): null}
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