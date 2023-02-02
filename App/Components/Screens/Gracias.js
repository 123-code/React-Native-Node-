import React from 'react';
import {View,Text,StyleSheet,TextInput,Dimensions,Button,Pressable } from 'react-native';


export default function Gracias({navigation}){
return(
    <View style={styles.text}>
<Text> Gracias Por Vender con Nosotros! </Text>
<Pressable style={styles.button}>
<Text style={styles.alltext} onPress={()=>{navigation.navigate("posts")}}> Seguir comprando </Text>
</Pressable>
    </View>
)
}   

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text:{
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    text1:{
        fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    }

});