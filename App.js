import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './src/navigation';

export default function App() {
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

