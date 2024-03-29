import React from 'react';
import {BottomNavigation} from './src/Screens';
import {Provider} from 'react-redux';
import Store from './src/Store/Store';
import {View} from 'react-native';

const App = () => {
  return (
    <Provider store={Store}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff', // White background color
        }}>
        <BottomNavigation />
      </View>
    </Provider>
  );
};

export default App;
