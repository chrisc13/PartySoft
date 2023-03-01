import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AttendeeHomeView from './views/attendeeHome/attendeeHomeView';

export default function App() {
  return (
    <View>
      <AttendeeHomeView/>
    </View>
  );
};
