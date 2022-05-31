import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigation from './src/navigation';
import { useSelector, useDispatch } from "react-redux";
import { getBooksAsync } from "./redux/contentSlice";
import { selectBookData } from "./redux/contentSlice";

const App = () => {
  // const dispatch = useDispatch();
  // const bookData = useSelector(selectBookData);
  
  // useEffect(() => {
  //   dispatch(getBooksAsync());
  // }, []);
  return (
    <Provider store={store}>
       <SafeAreaProvider>
        <Navigation />
       </SafeAreaProvider>
      
    </Provider>
   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//});
export default App;
