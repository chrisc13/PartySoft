import React from 'react';
import { StyleSheet, View } from 'react-native';
import AttendeeHomeView from './views/attendee/attendeeHomeView';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <AttendeeHomeView/>
    </View>
  );
};
