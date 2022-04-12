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
        <Box  space={4}  h="45" w="100%" bg="#fff" mt="8" >
            <HStack alignItems= "center"  justifyContent= "space-around">
            <Text fontSize="lg" >Light mode</Text>
            <Switch colorScheme="primary" 
            isChecked = {colorMode == "Light"}
            onToggle={toggleColorMode}
            />
            </HStack>
        </Box>

        
     );

   
};



export default ChangeMode;