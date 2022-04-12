import React from "react";

import { Box, Image,VStack,HStack,Text ,ScrollView,View,NativeBaseProvider,Center,Pressable,FlatList} from "native-base";

const NewBooks = ({ books, navigation }) => {
    return(
        
       
            <Pressable onPress={() => navigation.navigate('Detail', books)}>
                
                  <Image mr="25" ml="25" source={{ uri: books.image }} alt="Alternate Text"  w="75" h="116" />
                
                
            </Pressable>

            
         
            
                





            
            
            
            
        
            
            
                    

                    
        

    );
};

export default NewBooks;