import React from "react";

import { Box, Image,VStack,HStack,Text ,ScrollView,View,NativeBaseProvider,Center,Pressable,FlatList} from "native-base";



import NewBooks from "./NewBooks";

const NewList = ({ books, navigation }) => {
    const renderItem = ({ item }) => <NewBooks books={item} navigation={navigation} />;
    return (
       
          <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "white" }}
      data={books}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      horizontal 
    />  
       
        

      
    );  
  }
  
  export default NewList;