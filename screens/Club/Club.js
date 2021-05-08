import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import CrownIcon from 'react-native-vector-icons/FontAwesome5';
import ForumCard from './ForumCard';
import FacePile from './FacePile';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Club = ({route, navigation}) => {
  useEffect(() => {
    for (var i = 0; i < data.clubs.length; i++) {
      if (data.clubs[i].id == id) {
        setClub(data.clubs[i]);
      }
    }
  }, []);

  const [club, setClub] = useState({});
  const [tab, setTab] = useState('forum');
  const {id} = route.params;
  const data = require('../data.json');

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'black'}}>
      <View style={{backgroundColor: '#1E1E1E'}}>
        <BackgroundImage
          source={{
            uri: club.url,
          }}
          style={styles.image}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-back"
                size={30}
                color="white"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn}>
              <Icon
                name="information-circle"
                size={30}
                color="white"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
        </BackgroundImage>
        <View style={{marginHorizontal: 10}}>
          <View style={styles.detail}>
            <Avatar
              rounded
              source={{uri: club.url}}
              size="large"
              containerStyle={{borderColor: 'white', borderWidth: 2}}
            />
            <View style={{flex: 1, alignSelf: 'center', marginLeft: 5}}>
              <Text style={styles.textTitle}>{club.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>Fleeker: {club.author}</Text>
                <CrownIcon
                  name="crown"
                  size={15}
                  color="orange"
                  style={{alignSelf: 'center', paddingHorizontal: 5}}
                />
              </View>
            </View>
          </View>
          <Text style={styles.text}>{club.description}</Text>
          <FacePile />
          <Text
            style={{
              ...styles.text,
              color: '#A3A3A3',
              marginBottom: 20,
              marginLeft: 90,
            }}>
            {club.member} members
          </Text>
        </View>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity onPress={() => setTab('forum')}>
          <Text
            style={{
              ...styles.tabBtn,
              color: tab === 'forum' ? '#33DFC5' : 'white',
            }}
            id="forum">
            Forum
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('quiz')}>
          <Text
            style={{
              ...styles.tabBtn,
              color: tab === 'quiz' ? '#33DFC5' : 'white',
            }}
            id="quiz">
            Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('premium')}>
          <View style={{flexDirection: 'row'}}>
            <CrownIcon
              name="crown"
              size={15}
              color="orange"
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                ...styles.tabBtn,
                color: tab === 'premium' ? '#33DFC5' : 'white',
              }}>
              Premium
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {tab === 'forum' ? (
        <FlatList
          data={data.forum}
          renderItem={({item}) => (
            <ForumCard
              author={item.author}
              bio={item.bio}
              profile={item.profile}
              time={item.time}
              comment={item.comment}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : tab === 'quiz' ? (
        <Text style={styles.textTitle}>Quiz</Text>
      ) : tab === 'premium' ? (
        <Text style={styles.textTitle}>Premium</Text>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: windowHeight * 0.2,
  },
  textTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  detail: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  headerBtn: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#A3A3A350',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    height: 40,
    borderRadius: 10,
  },
  tabBtn: {
    padding: 10,
    color: 'white',
  },
});

export default Club;
