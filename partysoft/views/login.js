import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import masterHeader from '../common/masterHeader';

const loginPage = () => {
  return (
    <View style={styles.bg}>
      <masterHeader></masterHeader>
      <Text style={styles.text}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
});

export default loginPage;