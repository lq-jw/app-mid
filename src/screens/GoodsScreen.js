import React from "react";
//import { View , Text , StyleSheet} from "react-native";
import { Box, Image, Text} from "native-base"

const GoodsScreen = () => {
    return(
        <Box style = {styles.contain}>
            <Image/>
            <Box>
                <Box></Box>
                <Box></Box>
            </Box>
            <Box>
                <Box>請選擇商品選項</Box>
                <Box>加入購物車</Box>
            </Box>
            <Box>
                <Image/>
                <Box>
                    <Text>商家名稱</Text>
                    <Text>5分鐘前上線</Text>
                </Box>
                <Box>
                    <Text>查看商家</Text>
                </Box>
            </Box>
            <Box>
                <Text>商品介紹</Text>
                <Text></Text>
            </Box>
        </Box>
    );
};

// const styles = StyleSheet.create({
//     contain: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: '#EAE1DF',
//     },
//     txt: {
//         fontSize: 30,
//     }
// });

export default GoodsScreen;