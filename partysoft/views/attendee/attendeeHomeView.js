import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MasterHeader from '../../common/masterHeader';
import MasterNavigation from '../../common/masterNavigation';

const attendeeHomeView = () => {
  return (
    <View style={styles.container}>

    <MasterHeader/>

    <View style={styles.userOptions}>
      <View style={styles.optionSizing}>
        <Text style={styles.userText}>This is for the room code</Text>
      </View>
    </View>

    <View style={styles.userOptions}>
      <View style={styles.optionSizing}>
        <Text style={styles.userText}>This is for the QR Code</Text> 
      </View>
    </View>

    <MasterNavigation data={obj}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  // only used to determine the size of the invisible space between header and navigation. Don't touch
  userOptions: {
    flex: 3,
    width: 250, 
    margin: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  userText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  // optionSizing used to control the actual sizing of the room code and QR code area
  optionSizing: {
    backgroundColor: '#B2BEB5', 
    height: 100,
    borderRadius: 40,
    justifyContent: 'center'
  }
});

export default attendeeHomeView;