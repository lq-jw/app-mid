import React from "react";
//import { View , Text} from "react-native";
import { Box, Image, ColorMode, useColorMode,Text} from "native-base"
//import { ImageBackground } from "react-native";
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";

const WishScreen = () => {
    const{colorMode} = useColorMode();
    const favItems = useSelector((state) => state.fav.itemsList);
    console.log(favItems);


    return(
        <Box flex={1} alignItems= "center" _light={{bg:"#fff"}} _dark={{bg:"#121212"}}>

            {/* <Box flexDirection="row" h="90" w="330" mt="15" borderRadius="10" 
             _light={{borderWidth:"1" , borderColor:"#9C9C9C" }}
            _dark={{borderWidth:"1" , borderColor:"#EAE1DF" }} >
                <Image 
                    h="81" w="54" mt="1" ml="16" mr="14" mb="4"
                    source = {require('../img/btn_newbook_5.png')}
                    alt="likebook00"
                />
                <Box >
                    <Text fontSize="16" mt="2">Mockup</Text>
                    <Text fontSize="12" mt="1" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"}>NT350元</Text>
                    <Box mt="2" flexDirection="row">
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        fullStarColor={'#E9435E'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                        />                 
                        <Text mt="-1" color="#949494">  3  </Text>           
                        <Text mt="-1" color="#A6A6FF">(25)</Text>  
                        <Box ml="30" >
                            <MaterialCommunityIcons name="heart" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"} size={18} />
                        </Box>  
                        
                    </Box>

                </Box>                
            </Box>  */}
             




            {/* <Box flexDirection="row" h="90" w="330" mt="15" borderRadius="10" 
            _dark={{borderWidth:"1" , borderColor:"#EAE1DF" }}  _light={{borderWidth:"1" , borderColor:"#9C9C9C" }}
            >
                <Image
                    h="81" w="54" mt="1" ml="16" mr="14"
                    source = {require('../img/btn_newbook_0.png')}
                    alt="likebook01"
                />
                <Box >
                    <Text fontSize="16" mt="2">Paulo Coelho</Text>
                    <Text fontSize="12" mt="1" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"}>NT510元</Text>
                    <Box mt="2" flexDirection="row">
                        <StarRating
                        
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        fullStarColor={'#E9435E'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                        />                 
                        <Text mt="-1" color="#949494">  3  </Text>
                        <Text mt="-1" color="#A6A6FF">(50)</Text>       
                        <Box ml="30" >
                            <MaterialCommunityIcons name="heart" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"} size={18} />
                        </Box>  
                    </Box>
                </Box>
            </Box> */}


            {favItems.map((item) => {
                return(
                <Box flexDirection="row" h="90" w="330" mt="15" borderRadius="10" 
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
                        <StarRating
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
                        <Text mt="-1" color="#A6A6FF">(25)</Text>  
                        <Box ml="30" >
                            <MaterialCommunityIcons name="heart" color={colorMode== "light" ? "#E9435E" : "#D2C1F3"} size={18} />
                        </Box>  
                        
                    </Box>

                </Box> 


            </Box> 
                )
            })}





        </Box>
        
    );
};



export default WishScreen;