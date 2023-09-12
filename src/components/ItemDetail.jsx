import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ItemDetail({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.card_images[0].image_url }}
        style={styles.cardImage}
      />
      <Text style={styles.cardName}>Name: {item.name}</Text>
      <Text style={styles.cardInfo}>Type: {item.type}</Text>
      <Text style={styles.cardInfo}>Archetype: {item.archetype}</Text>
      <Text style={styles.cardInfo}>Description: {item.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardImage: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  cardInfo: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
});