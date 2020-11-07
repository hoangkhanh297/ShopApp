
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

// import { createStackNavigator } from '@react-navigation-stack';
// import {createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from './src/components/authentication/Authentication.js'
import ChangeInfo from './src/components/changeInfo/ChangeInfo.js'
import Main from './src/components/main/Main.js'
import OrderHistory from './src/components/orderHistory/OrderHistory.js'

StatusBar.setHidden(true);

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" },
  text: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red"
  }
});
export default App;
