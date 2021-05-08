import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../../styles/global';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Club</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: '#141414',
    alignSelf: 'stretch',
  },
  title: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
