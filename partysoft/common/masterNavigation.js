import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const masterNavigation = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.tabs}>
            Host Home
        </Text>
        <Text style={styles.tabs}>
            Attendee Home
        </Text>
        <Text style={styles.tabs}>
            Settings
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    tabs: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 15,
      backgroundColor: 'coral',
      borderWidth: 1,
      textAlign: 'center',
      textAlignVertical: 'center'
    }
  });

export default masterNavigation;