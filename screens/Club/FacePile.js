import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';

const windowWidth = Dimensions.get('window').width;

const data = require('../data.json');

const FacePile = () => {
  let left = 0;
  return (
    <View
      style={{flexDirection: 'row', position: 'relative', marginVertical: 10}}>
      {data.faces.map((face, index) => {
        if (index < 5) {
          left += 0.0237;
          return (
            <Avatar
              rounded
              size="small"
              key={face.id}
              containerStyle={{...styles.pilethis, left: windowWidth * left}}
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
