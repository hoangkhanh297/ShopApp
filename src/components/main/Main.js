

import React from 'react';
import { Text, View, StyleSheet, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Main: () => React$Node = () => {

  return (
    <View style={styles.view}>
        <Text>Main</Text>
        <Button title="Tiếp tục" onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "pink", alignItems: "center", justifyContent: "center" },
  text: {
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red"
  }
});
export default Main;
