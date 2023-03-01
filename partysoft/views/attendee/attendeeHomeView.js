import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MasterHeader from '../../common/masterHeader';

const attendeeHomeView = () => {
  return (
    <View style={styles.container}>

    <MasterHeader/>

    <View style={styles.userOptions}>
      <Text style={styles.userText}>This is for the room code</Text>
    </View>

    <View style={styles.userOptions}>
      <Text style={styles.userText}>This is for the QR Code</Text> 
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  userOptions: {
    flex: 1,
    backgroundColor: '#B2BEB5',
    borderRadius: 100 / 2,
    width: 300, 
    height: 300, 
    margin: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  userText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default attendeeHomeView;