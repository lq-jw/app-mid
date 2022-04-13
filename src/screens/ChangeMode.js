import React from "react";
//import { View , Text , StyleSheet} from "react-native";
import { HStack, Switch, Text, Box} from "native-base";
import { useColorMode } from 'native-base';

const ChangeMode = () => {
    const{
        colorMode,
        toggleColorMode
    } = useColorMode();
     return(
        <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg:"#121212"}}>
            
            <Box  space={4}  h="45" w="100%"  mt="8" _light={{bg:"#fff"}} _dark={{bg:"#353552"}}>
                <HStack alignItems= "center"  justifyContent= "space-around">
                <Text fontSize="lg" >Light mode</Text>
                <Switch colorScheme="primary" 
                isChecked = {colorMode == "Light"}
                onToggle={toggleColorMode}
                />
                </HStack>
            </Box>
            <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg:"#121212"}}></Box>
     

        </Box>
     );

   
};



export default ChangeMode;