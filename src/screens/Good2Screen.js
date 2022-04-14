import React ,{useState}from "react";
//import { View , Text , StyleSheet} from "react-native";
import { Box, Image, Text,ScrollView, Center,useTheme, useColorMode} from "native-base"
import { TouchableOpacity } from "react-native";
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Good2Screen = () => {
    const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
};

const { colors } = useTheme();
const { colorMode } = useColorMode();
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        _light = {{ bg:"#fff" }}
        _dark = {{ bg:"#121212"}}
        >
            <Center>
                <Box width="100%" height="250" bg="#4F4F82" position="absolute" >hi</Box>
                <Box>
                <Image  top="25" zIndex={2} position="absolute" alignSelf="center"source={require('../img/image_23.png')} alt="Alternate Text" w="133" h="200"/>
                </Box>
            </Center>
            <Box ml="15" top="250">
                <Text  position="absolute" fontSize="xl" bold>New Universe </Text>
                <Text   left="60%" bold fontSize="lg" >｜NT330元</Text>
                <Text  color="#C4C4C4" bold>HParadise</Text>
                <Box mt="2" flexDirection="row">
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={4.5}
                        fullStarColor={'#E9435E'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                        />                 
                        <Text mt="-1" color="#949494">  4.5  </Text>           
                        <Text mt="-1" color="#A6A6FF">(25)</Text>    
                </Box>
                
            </Box>
            <Box position="absolute"  ml="70%" top="300">
                    <TouchableOpacity  onPress={() => toggleFunction()}>
                        <Text>{toggle ? <MaterialCommunityIcons name="heart-outline" color={colorMode=="light" ? "#292D32" : "#CCC4DC"} size={26} /> : 
                        <MaterialCommunityIcons name="heart" color="#E9435E" size={24}  />}</Text>
                    </TouchableOpacity>
                    
            </Box>
            <Box position="absolute"  ml="80%" top="295">
                <MaterialCommunityIcons  color={colorMode=="light" ? "#292D32" : "#CCC4DC"} name="share-variant"  size={24}  />
            </Box>
            
            <Box position="absolute"  ml="30"  top="320" borderBottomWidth={1} borderBottomColor="#000" w="80%">  <Text >請選擇商品選項</Text></Box>
            {/* <Box position="absolute"  ml="15" top="400" bg={colorMode=="light" ? "#292D32" : "#CCC4DC"} w="80%" h="0.9"></Box> */}

            <Center>

            <Box position="absolute"  ml="15" top="330" bg="#D7E6FF" w="80%" borderRadius="md" >
                <TouchableOpacity >
                    <Center h="44"> 
                    <Text fontSize="xl" color="#000"> <MaterialCommunityIcons   name="cart-outline"  size={24}  />加入購物車</Text>
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
                    <Text bold fontSize="md">商品介紹</Text>
            </Box>


            <Center w="80%" ml="30" marginTop="510">
                <Box>
                <Text>
                　　　　台灣出生美國受教育的作者，在東西方的生活文化撞擊中成長，而經歷了各種男人與女人相處的荒誕言行，於是，根據自己的實戰經驗，挑選出十二星座代表，給想認識男人的女性們朋友參考，順便也有話要對男人說。到處吃喝玩樂葷腥不忌，種族顏色不拘的派對女王，左右逢源，讓許多大明星也讚嘆，紛紛出面站台，據說，還有許多男人更是『剉著等』，紛紛預約買來看，而眾家姊妹更是引頸企盼，到底Diva為何如此受男人歡迎？套句吳彥祖說的：「只要是和男人有關的主題，她就是個權威，因為她在這方面下了十足的功夫。」
                </Text>
                </Box>
                
            </Center>
            
            
             
            
        </ScrollView>
        
    );
};



export default Good2Screen;