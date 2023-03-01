import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const masterHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>PartySoft</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
});

export default masterHeader;