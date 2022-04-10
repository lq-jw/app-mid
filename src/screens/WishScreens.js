import React from "react";
import { View , Text , StyleSheet, Image} from "react-native";
import StarRating from 'react-native-star-rating';

const WishScreen = ({route}) => {
    const {
        star_rating,
        star_rating_text
    } = route.params;
    return(
        <View style = {styles.contain}>
            <View style = {styles.wishsection}>
                <Image 
                    style = {styles.wishimg}
                    source={{
                      uri: 'https://github.com/lq-jw/app-mid/blob/main/img/btn_newbook_5.png'
                    }}
                />
                <View>
                    <Text style = {styles.wishTxtName}>Glasses</Text>
                    <Text style = {styles.wishTxtPrice}>NT350元</Text>
                    <StarRating
                        style={styles.wishstarStar}
                        disabled={true}
                        maxStars={5}
                        rating={star_rating}
                        fullStarColor={'#FFC41F'}
                        emptyStar = {"star"}
                        emptyStarColor={'#EDEDEF'}
                        halfStarEnabled={true}
                        starSize={14}
                        containerStyle={{justifyContent: "center"}}
                        starStyle={{marginRight: 5}}                            
                    />                 
                    <Text style={styles.wishstarNum}>{star_rating_text}</Text>
                    <Text style={styles.wishstarNumBack}> / 5.0</Text>   
                </View>                
            </View>
            <View style = {styles.wishsection}>
                <Image
                    style = {styles.wishimg}
                    source={{
                        uri: 'https://github.com/lq-jw/app-mid/blob/main/img/btn_newbook_4.png'
                    }}
                />
                <View>
                    <Text style = {styles.wishTxtName}>Mau Jiou</Text>
                    <Text style = {styles.wishTxtPrice}>NT510元</Text>
                    
                </View>
            </View>
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
    wishimg: {
        height: 81,
        width: 54,
    },
    wishsection: {
        flexDirection:"row",
    },
    wishTxtName: {
        fontSize: 16,
    },
    wishTxtPrice: {
        fontSize: 12,
    }
});

export default WishScreen;