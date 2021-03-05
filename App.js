import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';
import { UserReducer } from './src/reducers/UserReducer';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
      <StatusBar backgroundColor="#63C2D1" barStyle="default" />
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}