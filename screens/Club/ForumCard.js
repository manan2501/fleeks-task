import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FacePile from './FacePile';

const ForumCard = ({author, bio, profile, time, comment}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Avatar
          size="medium"
          source={{uri: profile}}
          avatarStyle={{borderRadius: 10}}
        />
        <View style={{marginLeft: 5, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18}}>{author}</Text>
            <FontAwesome5
              name="crown"
              size={15}
              color="orange"
              style={{alignSelf: 'center', marginLeft: 5}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>{bio} </Text>
            <Text>•</Text>
            <Text> {time}</Text>
          </View>
        </View>
      </View>
      <Text style={{marginVertical: 5}}>{comment}</Text>
      <FacePile />
      <View style={{flexDirection: 'row', marginBottom: 5, marginLeft: 95}}>
        <FontAwesome5
          name="user-friends"
          size={15}
          color="black"
          style={{alignSelf: 'center'}}
        />
        <Text> + 42 People</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#85DEE2',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
});

export default ForumCard;
