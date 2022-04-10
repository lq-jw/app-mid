import React from "react";
import { View , Text , StyleSheet} from "react-native";

const GoodsScreen = () => {
    return(
        <View style = {styles.contain}>
            <Text style = {styles.txt}>This is Notice Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#EAE1DF',
    },
    txt: {
        fontSize: 30,
    }
});

export default GoodsScreen;