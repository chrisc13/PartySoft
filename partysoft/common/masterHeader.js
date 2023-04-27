import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MasterHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>PartySoft</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 10,
    padding: 15,
    backgroundColor: 'red',
    flex: 1
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
});

export default MasterHeader;