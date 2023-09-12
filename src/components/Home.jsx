import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function Home({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemDetail', { item })}
      style={styles.cardContainer}
    >
      <Image
        source={{ uri: item.card_images[0].image_url }}
        style={styles.cardImage}
      />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardInfo}>Type: {item.type}</Text>
      <Text style={styles.cardInfo}>Race: {item.race}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
  },
  cardList: {
    padding: 10,
  },
  cardContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 30,
    marginBottom: 10,
    padding: 15,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardInfo: {
    fontSize: 16,
  },
});