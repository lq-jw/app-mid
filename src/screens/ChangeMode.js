import React,{useRef} from "react";
//import { View , Text , StyleSheet} from "react-native";
import { HStack, Switch, Text, Box,Center} from "native-base";
import { useColorMode } from 'native-base';
import LottieView from "lottie-react-native";
const ChangeMode = () => {
   const{
        colorMode,
        toggleColorMode
   } = useColorMode();
   const animation = useRef();
 
   return(

      <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg:"#121212"}}>
          
         <Box  space={4}  h="45" w="100%"  mt="4" _light={{bg:"#fff"}} _dark={{bg:"#353552"}}>
            <HStack alignItems= "center"  justifyContent= "space-around">
               <Text fontSize="lg" >{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
               <Switch 
                  offTrackColor="indigo.500" 
                  onTrackColor="indigo.50"
                  onThumbColor="indigo.100" 
                  offThumbColor="indigo.200"
                  name="light Mode"
                  isChecked = {colorMode == "light"}
                  onToggle={toggleColorMode} 
                  onValueChange={(val) =>{
                     animation.current.play();
                  }}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
         </Box>
         <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg:"#121212"}} w="200%" h="200%" ml="-50%">
            <LottieView 
               source={colorMode == "light" ? require("../json/dark_lightmode.json") : require("../json/light_darkmode.json")}
               ref={animation}
               autoPlay
               loop={false}
            />   
            
         </Box>     
      </Box>
     
   );

};



export default ChangeMode;