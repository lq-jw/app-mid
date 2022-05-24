import { Text, useColorMode } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";


const Heart = ({fav}) => {
    const { colorMode } = useColorMode();
    return(
        <Text>{fav ? <MaterialCommunityIcons name="heart" color="#E9435E" size={24} /> : 
    <MaterialCommunityIcons name="heart-outline" color={colorMode=="light" ? "#292D32" : "#CCC4DC"} size={24}  />}</Text>
    );
};

export default Heart;  
