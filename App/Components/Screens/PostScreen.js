//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text,StatusBar,StyleSheet } from 'react-native';
import colors from './misc/colors';
import axios from 'axios';
 

const PostScreen = ()=>{
    return(
        <>
        <StatusBar barStyle='dark-content' backgroundColor={colors.DARK}>
        <View >
<Text> Posts </Text>

        </View>
        </StatusBar>
        <View>
            <Text style={styles.header}> Posts Recientes  </Text>
        </View>
        </>
    )
 
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