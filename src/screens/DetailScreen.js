import React ,{useState}from "react";
//import { View , Text , StyleSheet} from "react-native";
import { Box, Image, Text,ScrollView, Center,useTheme, useColorMode} from "native-base"
import { TouchableOpacity } from "react-native";
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import { favActions } from "../../redux/favSlice";
import Heart from "../components/Heart";
import { cartActions } from "../../redux/cartSlice";

const DetailScreen = ({route}) => {
const showFav = useSelector((state) => state.fav.showFav);
const dispatch = useDispatch();
const setFav = () => {
    dispatch(
        favActions.addFav({
            ...route.params          
        })
    );
}

const addToCart = () => {
    dispatch(cartActions.addToCart({...route.params}));
}

const { colors } = useTheme();
const { colorMode } = useColorMode();


const [state,setState] = useState(false);

const set = () => {
    setState(!state);
    //console.log(state);
}



    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        _light = {{ bg:"#fff" }}
        _dark = {{ bg:"#121212"}}
        >
            <Center>
              
                <Box>
                <Image  top="25" zIndex={2} position="absolute" alignSelf="center"source={{uri: route.params.image_url}} alt="Alternate Text" w="133" h="200"/>
                </Box>
            </Center>
            <Box ml="15" top="250">
                <Text  position="absolute" fontSize="20" bold>{route.params.title}</Text>
                <Text   left="60%"  bold fontSize="20" >｜NT{route.params.num_pages}元</Text>
                <Text   color="#C4C4C4" bold>{route.params.authors}</Text>
                <Box mt="2" flexDirection="row">
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={route.params.rating}
                        fullStarColor={'#E9435E'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                        />                 

                        <Text mt="-1" color="#949494"> {route.params.rating} </Text>           
                        <Text mt="-1" color="#A6A6FF">(25)</Text>    
                </Box>
                
            </Box>
            <Box position="absolute"  ml="70%" top="300">

                    <TouchableOpacity  onPress={() => 
                        {   setFav();
                            set();
                            
                        }

                        
                    }>
                        {/* <Heart fav={route.params.fav}/> */}
                     
                        <Text>{state ? <MaterialCommunityIcons name="heart" color="#E9435E" size={24} /> : 
                        <MaterialCommunityIcons name="heart-outline" color={colorMode=="light" ? "#292D32" : "#CCC4DC"} size={24}  />}</Text>
                    </TouchableOpacity>
                    
            </Box>
            <Box position="absolute"  ml="80%" top="295">
                <MaterialCommunityIcons  color={colorMode=="light" ? "#292D32" : "#CCC4DC"} name="share-variant"  size={24}  />
            </Box>
            
            <Box position="absolute"  ml="30"  top="320" borderBottomWidth={1} borderBottomColor="#000" w="80%">  <Text >請選擇商品選項</Text></Box>
            {/* <Box position="absolute"  ml="15" top="400" bg={colorMode=="light" ? "#292D32" : "#CCC4DC"} w="80%" h="0.9"></Box> */}

            <Center>

            <Box position="absolute"  ml="15" top="330" bg="#D7E6FF" w="80%" borderRadius="md" >
              
                <TouchableOpacity onPress={() => { addToCart() }}>
                  
                    <Center h="44"> 
                    <Text fontSize="16" color="#000"> <MaterialCommunityIcons   name="cart-outline"  size={22}  />加入購物車</Text>
                    </Center>
                    
                </TouchableOpacity>
            </Box>

            <Box position="absolute"  borderBottomWidth={1} borderTopWidth={2}
            ml="15" top="400" w="80%" borderRadius="md" 
            borderBottomColor="#C4C4C4" borderTopColor="#C4C4C4" 
            display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
            >
                <Box justifyContent="center" display="flex" flexDirection="row" alignItems="center">
                    <Box w="10" h="10" bg="#C4C4C4" m="13" borderRadius="50" ></Box>
                    <Box>
                        <Text  fontSize="13">商家名稱</Text>
                        <Text color="#E9435E" fontSize="13">幾分鐘前上線</Text>
                    </Box>

                    
                </Box>
                <Box borderWidth={1} borderColor="#E9435E" borderRadius={1} w="20">
                    <Text fontSize="13" color="#E9435E" alignSelf="center">查看商家</Text>
                </Box>
                
            </Box>
            
            
            </Center>
            <Box position="absolute" top="550" ml="30">
                    <Text bold fontSize="17">商品介紹</Text>
            </Box>


            <Center w="80%" ml="30" marginTop="510" mb="10">
                <Box>
                <Text>
                    {route.params.description}
                </Text>
                </Box>
                
            </Center>
            
            
             
            
        </ScrollView>
        
    );
};



export default DetailScreen;