import React from "react";
//import { View , Text , StyleSheet} from "react-native";
import { HStack, Switch, Text, Box,Center} from "native-base";
import { useColorMode } from 'native-base';

const ChangeMode = () => {
   const{
        colorMode,
        toggleColorMode
   } = useColorMode();
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
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
         </Box>
         <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg:"#121212"}}></Box>     
      </Box>
     
   );

};



export default ChangeMode;