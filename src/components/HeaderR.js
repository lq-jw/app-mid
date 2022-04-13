import React, { Component } from 'react';
import { Box } from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { render } from "react-dom";

export default class AccountHeaderR extends Component{
    render(){
        return(
                <Box mr="20px">
                    <MaterialCommunityIcons
                        name={ 'cart-outline'}
                        size={24}
                        color={"#fff"}
                    />
                </Box>
        ) ;
    }
}

