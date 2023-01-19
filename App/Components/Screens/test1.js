import {useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreeen(){
    const [Authenticated,setAuthenticated] = useState(false);
    const [googleURL,setGoogleURL] = useState("");
    const [accessToken,setAccessToken] = useState("");
    const [userInfo,setUserinfo] = useState("");
    const navigation = useNavigation();


        const signinWithGoogle = async()=>{
        try{
        const result = await Google.logInAsync({
           // androidClientId:'androidClientId',
            iosClientId:'133427487604-fckojm1va3kssread96bbj03grb2m953.apps.googleusercontent.com',
            scopes:['profile','email']
        });
        if(result.type === 'success'){
            setAccessToken(accessToken); 
        }
        else{
            console.log("cancelled")
        }
        }catch(err){
            console.error(err)
        }
        }

        const GetuserInfo = async()=>{
        let GetUserData = await fetch("https://www.googleapis.com/userinfo/vs/me",{
            headers:{Authorization:`Bearer ${accessToken}`}
        })
        GetUserData.json().then((data)=>{
        setUserinfo(data)
        })
        }


        const getGoogleURL = async()=>{
            try{
        const response = await client.get(urlclient);
        const {URL}= response.data;
        setGoogleURL(URL);
            }catch(err){
                console.error(err)
            }
        }

        const ShowUserInfo = ()=>{
            if(userInfo){
                return(
                    <View>
                        <Image source={{uri:userInfo.picture}}/>
                        <Text> Bienvenido{userInfo.name}</Text>
                    </View>
                )

            }
       }


            const onButtonpresed = ()=>{
                {
                    accessToken ? 
                setAuthenticated(true):
                signinWithGoogle();
                navigation.navigate('Home');
                }
                
            }


               return(
                    <View>
                        {ShowUserInfo()}
                        <Text> login  </Text>
            <Pressable onPress={onButtonpresed}/>
            <Button onPress={accessToken ? GetuserInfo : signinWithGoogle}></Button>
                    </View>
                )
}