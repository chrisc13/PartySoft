import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MasterNavigation from './navigation/masterNavigation';
import LoginView from './views/loginView';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default function App() {
  return (
    <View>
      <Text>
        This is base
      </Text>
    </View>
  );
};
