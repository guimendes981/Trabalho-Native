import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function FlagScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.flag}
        source={{ uri: 'https://restcountries.com/v3.1/flag/br' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  flag: {
    width: 200,
    height: 120,
  },
});
