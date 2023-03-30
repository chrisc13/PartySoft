import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import LoginPage from './views/login';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is home base from windows</Text>
      <LoginPage></LoginPage>
    </View>
  );
};
