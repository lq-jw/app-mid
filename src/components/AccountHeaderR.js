import React, { Component } from 'react';
import { Box, Text } from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

export default class AccountHeaderR extends Component{
    render(){
        
        return(
            <Box flexDirection={"row"} >
                <Box>
                    <Feather
                        name={ 'settings'}
                        size={24}
                        color={"#fff"}
                    />   
                </Box>
                <Box ml="15" mr="10px">
                    
                    
                    <MaterialCommunityIcons
                        name={ 'cart-outline'}
                        size={24}
                        color={"#fff"}
                    />
                </Box>
            </Box>
        );
    }
}

