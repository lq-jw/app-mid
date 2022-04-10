import React from "react";
import { View , Text , StyleSheet} from "react-native";

const SearchScreen = () => {
    return(
        <View style = {styles.contain}>
            <Text style = {styles.txt}>This is Search Screen</Text>
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

export default SearchScreen;