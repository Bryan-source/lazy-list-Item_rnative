import React from 'react';
import { View } from 'react-native';
import ListContainer from './ListContainer';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ListContainer/>
    </View>
  );
}

