import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native';
import bcrypt from 'react-native-bcrypt';



const LoginForm = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[phash,setphash] = useState('');


  const Encryptpin = (pass)=>{
    try{
        const salt = bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(pass,salt,function(err,hash){
        console.log('unhashed:',pass)
        setphash(hash);
        console.log('hash:',hash)
        
          })
        })
        
    }catch(err){
      console.error(err)
    }
  }
  const PASSWORD_API_URL = 'http://192.168.1.3:8000/auth/createusername'

  const SaveuserData = async(username,password)=>{
     Encryptpin(password);
    try{
       const response = await fetch(PASSWORD_API_URL,{
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                  username:username,
                  password:phash,
                }
              )
       })
       const data = await response.json();
       console.log(data);

    }catch(err){
        console.error(err)
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.greentext}> Registro  </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        
        secureTextEntry={true}
      />
      <Pressable style={styles.button}  
      onPress = {()=>{SaveuserData(username,password),navigation.navigate("Posts")}}>  
     <Text style={styles.alltext}>  Ingresar  </Text>
     </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    fontFamily: 'Futura',
  },
  alltext:{
        
    fontFamily: 'Futura',
    fontSize: 16,
    color: 'white',
  
},
greentext:{
    color:"green",
    fontFamily: 'Futura',
    fontWeight:"bold"
},
buttontext:{
  color:"white",
  fontFamily: 'Futura'
  
},
container: {
  flex: 1,
  backgroundColor: '#FFFBF0',
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'black',
}
});

export default LoginForm;
