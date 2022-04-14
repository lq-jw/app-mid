import React, { Component } from 'react';
import { Box, Image } from "native-base";

export default class HeaderLogo extends Component{
    render(){
        return(
                <Box>
                    <Image h="26px" w="114px" 
                        source={require("../img/logo.png")}
                        resizeMode='contain'
                        alt="logo"
                    />
                </Box>
        );
    }
}