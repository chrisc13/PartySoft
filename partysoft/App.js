import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import LoginPage from './views/login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 585858
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage></LoginPage>
    </View>
  );
};
