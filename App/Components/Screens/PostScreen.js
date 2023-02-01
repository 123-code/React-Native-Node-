  //import { StatusBar } from 'expo-status-bar';
  // https://gateway03.southcentralus.console.azure.com/n/cc-4ceffcb4/cc-4ceffcb4/proxy/8001/postPost
  import React,{useState,useEffect} from 'react';
  import { ActivityIndicator,View,Text,StatusBar,StyleSheet, FlatList,Pressable } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { AntDesign } from '@expo/vector-icons';

  const baseURL =  "http://172.31.150.215:8000/api/getPost";
  const GetUserNameURL = 'http://172.31.150.215:8000/auth/getuserdata'


  const PostScreen = ()=>{
  const [loading,setloading] = useState(true);
  const navigation = useNavigation();
  const [data,setData ] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(GetUserNameURL);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);
 
      useEffect(() => {
          fetchposts();
    }, []);


      const fetchposts = async ()=>{
          try{
              const response = await fetch(baseURL);
              const json = await response.json();
        
              setData(json)

              setloading(false)
          }catch(err){
              console.error(err);
          }
        }

const onLikePress = async()=>{

}


 const LikeButton = ({AntIconName,size,color,onPress})=>{
          return <AntDesign name={'like1'} size={size||24} color={color || 'black'} onPress={onLikePress}/>
      
  }


  const PostButton = ()=>{
    return(
      <View>
        <Text style = {styles.alltext} >Tu negocio, a la vista de todos </Text>
        <Pressable style = {styles.button} onPress={()=>{navigation.navigate('PostPost')}}>
          <Text style = {styles.alltext}>Promociona YA </Text>
          </Pressable>
      </View>
    )
  } 

  return (
      <>
      
      <View style={{ backgroundColor: '#3CB371',padding:5}}> 
      <View>
      <Text style = {styles.bigBlue}>
          Posts Recientes 
          </Text>
          {PostButton()}
      </View>
      </View>
      <View style={{backgroundColor: '#FFFAFA'}}>
      <Pressable style = {styles.submitbtn} onPress={()=>{navigation.navigate('Profile')}}>
         <Text style = {styles.alltext}> Hola,{userData.username} </Text>
          </Pressable>
      </View>

     
      <View style={{ flex: 1, padding: 24 ,backgroundColor: '#FFFAFA'}}>
        {loading ? ()=>{<ActivityIndicator/>} : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Text style={styles.posttext}>{item.nombre}, {item.precio}, {item.descripcion} <LikeButton/> </Text>
            )}
          />
        )}
      </View>
      </>
    );
  }

  const styles = StyleSheet.create({
      header:{
          fontSize:25,
          fontWeight:'bold',
          
          
      },
      bigBlue: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 30,
          fontFamily: 'Futura',
        },
        text:{
          color:"#708090",
          
        },
        alltext:{
        
            fontFamily: 'Futura',
            fontSize: 16,
            color: 'white',
          
        },
        posttext:{
        
          fontFamily: 'Futura',
          fontSize: 16,
          color: 'black',
        
      },
        buttontext:{
          color:"white",
          
        },
        container: {
          flex: 1,
          backgroundColor: '#FFFBF0',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
          marginRight: 70,
          marginLeft: 70,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'black',
        },
        signinbutton:{
          paddingTop:20,
          paddingBottom:20,
          color:'#fff',
          textAlign:'center',
          backgroundColor:'#68a0cf',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#fff',
          position: 'absolute',
          bottom: 0
      },
        footer: {
          backgroundColor: '#eee',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        },
        submitbtn: {
          marginRight: 130,
          marginLeft: 130,
          marginTop: 10,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: '#68a0cf',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#fff',
          textAlign: 'center',
          alignItems: 'center',
        },
  })


  export default PostScreen;
