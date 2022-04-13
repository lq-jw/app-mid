import React, { Component } from 'react';
import { Box, Image } from "native-base"
import { render } from "react-dom";

export default class HeaderBack extends Component{
    render(){
        return(
            <Image  width="25" height="25" 
                source={require("../img/HeaderBack.png")}
                resizeMode='contain'
                alt="back"
            />
            
        );
    }
}