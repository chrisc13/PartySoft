import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import loginPage from './views/login';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is home base from windows</Text>
      <loginPage></loginPage>
    </View>
  );
};
