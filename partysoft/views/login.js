import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterHeader from '../common/masterHeader';
import LoginForm from '../component/loginForm';

const LoginPage = () => {
  return (
    <View style={styles.bg}>
      <MasterHeader></MasterHeader>
      <LoginForm></LoginForm>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'darkslateblue',
    flex: 1
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
});

export default LoginPage;