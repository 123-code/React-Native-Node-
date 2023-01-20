import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Google } from 'expo';

export default function App({navigation}) {

const [accesstoken, setAccesstoken] = useState();
const navigate = useNavigation();

  _signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: 'YOUR_ANDROID_CLIENT_ID',
        iosClientId: '133427487604-fckojm1va3kssread96bbj03grb2m953.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        console.log('User Info: ', result.user);
        setAccesstoken(result.accessToken);
        return accesstoken;


      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  
    return (
      <View>
        <TouchableOpacity onPress={() => this._signInWithGoogleAsync()}>
          <Text>Login with Google</Text>
        </TouchableOpacity>
      </View>
    );
  
}
