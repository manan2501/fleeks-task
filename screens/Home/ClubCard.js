import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import FacePile from './FacePile';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ClubCard = ({id, url, name, author, joined, navigation}) => {
  const openClub = () => {
    navigation.navigate('Club', {id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={openClub}>
      <ImageBackground
        source={{
          uri: url,
        }}
        imageStyle={{borderRadius: 20}}
        style={styles.image}>
        <View style={styles.text}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.textTitle}>{name}</Text>
              <Text style={styles.textSubTitle}>By {author}</Text>
            </View>
            {joined ? (
              <FacePile />
            ) : (
              <Button
                onPress={openClub}
                title="Join"
                type="solid"
                buttonStyle={{
                  backgroundColor: '#32E1C1',
                  borderRadius: 10,
                  width: 80,
                  height: 40,
                }}
                titleStyle={{
                  color: 'black',
                }}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

ClubCard.defaultProps = {
  id: 0,
  url: 'https://cdn.britannica.com/75/75775-131-1D05DD74/Colosseum-Rome.jpg',
  name: 'History Nerd',
  author: 'Vishal Kumar',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    marginRight: 10,
  },
  image: {
    justifyContent: 'flex-end',
    width: windowWidth * 0.6,
    height: windowHeight * 0.25,
  },
  textTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textSubTitle: {
    color: 'white',
    fontSize: 12,
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#000000a0',
  },
});

export default ClubCard;
