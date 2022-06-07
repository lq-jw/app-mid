import React from "react";
//import { View , Text} from "react-native";
import { Box, Image, ColorMode, useColorMode,Text} from "native-base";
import { TouchableOpacity } from "react-native";
//import { ImageBackground } from "react-native";
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cartSlice";

const CartScreen = () => {
    const{colorMode} = useColorMode();
    const cartItems = useSelector((state) => state.cart.cartList);
    //console.log(cartItems);

    const dispatch = useDispatch();
    // const increase = () => {
    //     dispatch(cartActions.addToCart({
    //         id,
    //         title,
    //         authors,
    //         image_url,
    //         num_pages,
    //         description,
    //         rating,
            
    //         price,
    //         quantity,
    //         totalPrice
    //     }))
    // }
    // const decrease = () => {
    //     dispatch(cartActions.removeFromCart(id));
    // }

    return(
        <Box flex={1} alignItems= "center" _light={{bg:"#fff"}} _dark={{bg:"#121212"}}>




            {cartItems.map((item) => {
                return(
                <Box flexDirection="row" h="100" w="330" mt="15" borderRadius="10" 
             _light={{borderWidth:"1" , borderColor:"#9C9C9C" }}
            _dark={{borderWidth:"1" , borderColor:"#EAE1DF" }} >
                <Image 
                    h="81" w="54" mt="1" ml="5" mr="14" mb="4"
                    source={{uri: item.image_url}}
                    alt="likebook00"
                />
                <Box >
                   <Text fontSize="16" mt="2" isTruncated w="80%">{item.title}</Text>
                    
                    <Text fontSize="12" mt="1" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"}>NT{item.num_pages}元</Text>
                    <Box mt="2" flexDirection="row">
                        <Text fontSize="12" mt="1" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"}>數量</Text>
                        <Text>{item.quantity}</Text>

                        {/* <Box  ml="5" alignItems="center" bg="#D7E6FF" w="30" h="30" borderRadius="md">
                            <TouchableOpacity
                                onPress={() => { increase() }}
                            >
                                <Text fontSize="20" color="#000">+</Text>
                            </TouchableOpacity>
                        </Box> */}

                        {/* <Box  ml="5" alignItems="center" bg="#D7E6FF" w="30" h="30" borderRadius="md">
                            <TouchableOpacity
                                onPress={() => { decrease() }}
                            >
                                <Text fontSize="20" color="#000">-</Text>
                            </TouchableOpacity>
                        </Box> */}

                        
                    </Box>
                    
                    
                    
                    <Box mt="2" flexDirection="row">
                        {/* <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={item.rating}
                        fullStarColor={'#E9435E'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                        />                 
                        <Text mt="-1" color="#949494">  {item.rating}  </Text>           
                        <Text mt="-1" color="#A6A6FF">(25)</Text>   */}
                        {/* <Box ml="30" >
                            <MaterialCommunityIcons name="heart" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"} size={18} />
                        </Box>   */}
                        
                    </Box>

                </Box> 


            </Box> 
                )
            })}





        </Box>
        
    );
};



export default CartScreen;