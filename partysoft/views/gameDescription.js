import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const gameDescriptionView = () => {
  return (

    <View style={styles.container}>
        <MasterHeader/>

        <Text>Game Description goes here</Text>

        <MasterNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default gameDescriptionView;