import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text>Hello from Home Screen</Text>
    </SafeAreaView>
  );
};

export default Home;
