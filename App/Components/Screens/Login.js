import * as React from 'react';
import { useEffect } from 'react';
import * as Google from 'expo-auth-session/prorviders/google';
import { Button } from 'react-native';
import axios from 'axios';  
        //create axios client.
        const urlclient = axios.create({
            baseURL:'http://172.31.170.131:8000/auth/google/url',
        });


        export default function App() {
            const [request, response, promptAsync] = Google.useAuthRequest({
              iosClientId: '133427487604-fckojm1va3kssread96bbj03grb2m953.apps.googleusercontent.com',
              expoClientId: '133427487604-fckojm1va3kssread96bbj03grb2m953.apps.googleusercontent.com',
            
            });   
            // cada que se aplaste el boton, esto corre 
            useEffect(()=>{
                if (response?.type === 'success') {
                    const { authentication } = response;
                  }
            },[])
            //expo-auth-session@3.7.4 - expected version: ~3.8.0
            //expo-google-app-auth@10.0.0 - expected version: ~8.3.0
            return (
                <Button
                  disabled={!request}
                  title="Login"
                  onPress={() => {
                    promptAsync();
                  }}
                />
              );
            }
        

  