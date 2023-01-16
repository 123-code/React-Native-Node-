import {View,Text,StyleSheet,TextInput,Dimensions,Pressable} from 'react-native';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

//create axios client.
const client = axios.create({
    baseURL:'http://172.31.170.131:8000/auth/google/createuser',
});

export default function loginScreeen(){
    const [Authenticated,setAuthenticated] = useState(false);

    const fetchgoogledata = async()=>{
        try{
            const data = client.get(baseURL).then(res=>{
            console.log(res.data)
            })
        }catch(err){
        console.error(err)
        }
    return data;
    }

useEffect(()=>{
    fetchgoogledata();
},[])


    return(
        <View>
            <Text> login  </Text>
<Pressable> </Pressable>
        </View>
    )
}