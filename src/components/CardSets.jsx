import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function CardSets() {
  const [cardSets, setCardSets] = useState([]);

  useEffect(() => {
    axios
      .get('https://db.ygoprodeck.com/api/v7/cardsets.php')
      .then((response) => {
        setCardSets(response.data);
      })
      .catch((error) => {
        console.error('Erro na solicitação à API:', error);
      });
  }, []);

  const renderCardSet = ({ item }) => (
    <View style={styles.cardSetContainer}>
      <Image
        source={{ uri: item.set_image }}
        style={styles.cardSetImage}
      />
      <View style={styles.cardSetInfo}>
        <Text style={styles.cardSetName}>Name of Set: {item.set_name}</Text>
        <Text style={styles.cardSetNumOfCards}>Number of Cards: {item.num_of_cards}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card Sets</Text>
      <FlatList
        data={cardSets}
        renderItem={renderCardSet}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.cardSetList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  cardSetList: {
    padding: 10,
  },
  cardSetContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSetImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  cardSetInfo: {
    flex: 1,
  },
  cardSetName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSetNumOfCards: {
    fontSize: 16,
  },
});