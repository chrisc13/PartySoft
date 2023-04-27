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
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  },
  header: {
    //flex: 1,
    height: 60,
    padding: 15, 
    backgroundColor: 'red'
  }
});

export default MasterHeader;