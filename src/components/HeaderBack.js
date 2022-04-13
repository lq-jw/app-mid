import React, { Component } from 'react';
import { Box, OnPress} from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { render } from "react-dom";

const HeaderBack = ({  navigation }) => {

        return(
                
            <Box mr="3">
                <MaterialCommunityIcons
                    name={ 'chevron-left'}
                    size={24}
                    color={"#fff"}

                />
            </Box>
           
        );

}

export default HeaderBack;