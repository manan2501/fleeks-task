import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {FlatList} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

const data = require('../data.json');

const FacePile = () => {
  let right = 0.1437;
  return (
    <View style={{flexDirection: 'row', position: 'relative'}}>
      {data.faces.map((face, index) => {
        if (index < 5) {
          right -= 0.0237;
          return (
            <Avatar
              rounded
              size="small"
              key={face.id}
              containerStyle={{...styles.pilethis, right: windowWidth * right}}
              source={{uri: face.url}}
            />
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pilethis: {
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default FacePile;
