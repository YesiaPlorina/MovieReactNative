import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import React from 'react';
import Router from './router';
import {store} from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </Provider>
  );
};



export default App;
