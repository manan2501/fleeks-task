import {ThemeProvider} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import HomeStack from './routes/homeStack';
import {theme} from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeStack />
    </ThemeProvider>
  );
};

export default App;
