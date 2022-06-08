import React ,{useState}from "react";
import { Text, useColorMode } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";


const Heart = ({fav}) => {
    const { colorMode } = useColorMode();

    const [color,setColor] = useState({fav});
    
    return(
        <Text>{color ? <MaterialCommunityIcons name="heart" color="#E9435E" size={24} /> : 
    <MaterialCommunityIcons name="heart-outline" color={colorMode=="light" ? "#292D32" : "#CCC4DC"} size={24}  />}</Text>
    );
};

export default Heart;  
