import React from "react";

import { Box, Image,VStack,HStack,Text ,ScrollView,View,NativeBaseProvider,Center,Pressable,FlatList} from "native-base";



import NewBooks from "./NewBooks";
import { useSelector, useDispatch } from "react-redux";
import { getBooksAsync } from "../../redux/contentSlice";
import { selectBookData } from "../../redux/contentSlice";

const NewList = ({  navigation }) => {
  const books = useSelector(selectBookData);
  const newList  = books.map( (item) => {
    return (
        <Pressable
                    onPress={() => navigation.navigate('Detail', item)}
                >
                <Image mr="25" ml="25" source={{uri: item.image_url}} alt="Alternate Text" w="75" h="116" />
        </Pressable>
  )});


  return(newList);
   
  }
  
  export default NewList;