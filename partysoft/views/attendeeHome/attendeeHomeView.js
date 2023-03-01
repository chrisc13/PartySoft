import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MasterHeader from '../../components/masterHeader';

const attendeeHomeView = () => {
  return (
    <View style={styles.container}>
      <MasterHeader/>
      <Text style={styles.body} >This is the Attendee's main page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  body: {
    textAlign: 'center',
    backgroundColor: '#fff'
  }
});

export default attendeeHomeView;