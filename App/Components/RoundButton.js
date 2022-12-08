import React from 'react';
import {View,StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './Screens/misc/colors';


const RoundButton = ({AntIconName,size,color,onPress})=>{
    return <AntDesign name={AntIconName} size={size||24} color={color || colors.DARK} onPress={onPress}/>

}
export default RoundButton 