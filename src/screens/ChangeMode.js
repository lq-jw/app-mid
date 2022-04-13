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

        // <Box  space={4}  h="45" w="100%" bg="#fff" mt="8" >   
        //     <Text fontSize="lg">{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
        //     <Box
        //         flex={1}
        //         _dark={{ bg: "blueGray.900" }}
        //         _light={{ bg: "blueGray.50" }}
        //     >
        //         <Center
        //             shadow={2} width="90%"
        //             mt="2" px="2" py="4"
        //             _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
        //             _light={{ bg: "white" }}
        //             borderRadius="md"
        //             alignSelf="center"
        //         >
        //             <HStack space={8} alignItems="center" >
        //                 <Text fontSize="lg">{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
        //                 <Switch
        //                     name="light Mode"
        //                     isChecked={colorMode === "light"}
        //                     onToggle={toggleColorMode}
        //                     accessibilityLabel="display-mode"
        //                     accessibilityHint="light or dark mode"
        //                 />
        //             </HStack>
        //     </Center>
        //     </Box>
        // </Box>
     
        <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg:"#121212"}}>
            
            <Box  space={4}  h="45" w="100%"  mt="8" _light={{bg:"#fff"}} _dark={{bg:"#353552"}}>
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