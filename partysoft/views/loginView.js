import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const loginView = () => {
  return (

    <View style={styles.container}>
        <Text>login view goes here </Text>
        <Button title="Skip" color="blue"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default loginView;