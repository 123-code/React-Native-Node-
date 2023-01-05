//import { StatusBar } from 'expo-status-bar';
// https://gateway03.southcentralus.console.azure.com/n/cc-4ceffcb4/cc-4ceffcb4/proxy/8001/postPost
import React,{useState,useEffect} from 'react';
import { ActivityIndicator,View,Text,StatusBar,StyleSheet, FlatList } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';


    const baseURL =  "http://172.31.170.131:8000/api/getPost" 
  
 

const PostScreen = ()=>{
const [loading,setloading] = useState(true);
const [postvalues,setpostvalues]= useState({
    Nombre:'',
    Precio:0,
    Contenido:'',

});
const [data,setData ] = useState([]);

    useEffect(() => {
        fetchposts();
   }, []);


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

    
    /*
useEffect(()=>{
    fetchposts();
},[])
*/
return (
    <View style={{ flex: 1, padding: 24 }}>
      {loading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
    
          renderItem={({ item }) => (
            <Text>{item.nombre}, {item.precio}, {item.descripcion}</Text>
          )}
        />
      )}
    </View>
  );
 
}

const styles = StyleSheet.create({
    header:{
        fontSize:25,
        fontWeight:'bold',
    }
 
})

export default PostScreen;


/*
   const styles = StyleSheet.create({
        container:{}
        style={styles.container}
    })
*/