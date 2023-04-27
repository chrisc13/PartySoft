import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasterHeader from '../common/masterHeader';
import LoginForm from '../component/loginForm';

const LoginPage = () => {
  return (
    <View>
      <MasterHeader></MasterHeader>
      <LoginForm></LoginForm>
    </View>
  );
}


export default LoginPage;