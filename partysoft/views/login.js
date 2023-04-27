import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterHeader from '../common/masterHeader';
import LoginForm from '../component/loginForm';

const LoginPage = () => {
  return (
    <View style="styles.loginPage">
      <MasterHeader></MasterHeader>
      <LoginForm></LoginForm>
    </View>
  );
}

const styles = StyleSheet.create({
  loginPage: {
    flex: 1
  }
});

export default LoginPage;