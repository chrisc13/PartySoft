import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const hostHomeView = () => {
  return (

    <View style={styles.container}>
        <MasterHeader/>

        <Text>Game list goes here</Text>

        <MasterNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default hostHomeView;