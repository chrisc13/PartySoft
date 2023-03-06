import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MasterHeader from '../common/masterHeader';
import MasterNavigation from '../common/masterNavigation';

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