import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterHeader from '../common/masterHeader';

const LoginPage = () => {
  return (
    <View style={styles.bg}>
      <MasterHeader></MasterHeader>
      <Text>Welcome to the login page</Text>
      {/* chris' login form goes here*/}


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

export default LoginPage;