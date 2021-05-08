import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CatCard = ({icon, name}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name={icon}
        size={30}
        color="#32E1C1"
        style={{alignSelf: 'center'}}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    marginRight: 10,
    backgroundColor: '#1D1D1D',
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#32E1C1',
    fontSize: 12,
    alignSelf: 'center',
  },
});

export default CatCard;
