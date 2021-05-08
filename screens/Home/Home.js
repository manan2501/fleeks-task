import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {globalStyles} from '../../styles/global';
import CatCard from './CatCard';
import ClubCard from './ClubCard';
import Header from './Header';
import {LogBox} from 'react-native';

const data = require('../data.json');

const Home = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <View style={globalStyles.container}>
      <Header />
      <ScrollView style={{backgroundColor: '#000000', paddingLeft: 10}}>
        <Text style={styles.subTitle}>Your Clubs</Text>
        <FlatList
          horizontal
          data={data.clubs}
          renderItem={({item}) =>
            item.joined ? (
              <ClubCard
                id={item.id}
                url={item.url}
                name={item.name}
                author={item.author}
                joined={item.joined}
                navigation={navigation}
              />
            ) : null
          }
          keyExtractor={item => item.id}
        />
        <Text style={styles.subTitle}>Club Categories</Text>
        <FlatList
          horizontal
          data={data.categories}
          renderItem={({item}) => <CatCard icon={item.icon} name={item.name} />}
          keyExtractor={item => item.id}
        />
        <Text style={styles.subTitle}>Trending Club</Text>
        <FlatList
          horizontal
          data={data.clubs}
          renderItem={({item}) =>
            item.trending ? (
              <ClubCard
                id={item.id}
                url={item.url}
                name={item.name}
                author={item.author}
                joined={item.joined}
                navigation={navigation}
              />
            ) : null
          }
          keyExtractor={item => item.id}
        />
        <Text style={styles.subTitle}>Top Forums</Text>
        <ClubCard navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: '#141414',
    alignSelf: 'stretch',
  },
  subTitle: {
    marginVertical: 10,
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Home;
