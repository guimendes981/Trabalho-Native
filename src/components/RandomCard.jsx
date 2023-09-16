import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function RandomCard() {
  const [randomCard, setRandomCard] = useState(null);

  const getRandomCard = () => {
    axios
      .get('https://db.ygoprodeck.com/api/v7/randomcard.php')
      .then((response) => {
          setRandomCard(response.data);
      })
      .catch((error) => {
        console.error('Erro na solicitação à API:', error);
      });
  };

  useEffect(() => {
    getRandomCard();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Card</Text>
      {randomCard ? (
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: randomCard.card_images[0].image_url }}
            style={styles.cardImage}
          />
          <Text style={styles.cardInfo}>Nome: {randomCard.name}</Text>
          <Text style={styles.cardInfo}>Type: {randomCard.type}</Text>
          <Text style={styles.cardInfo}>Race: {randomCard.race}</Text>
          <Text style={styles.cardInfo}>Level: {randomCard.level}</Text>
          <Text style={styles.cardInfo}>ATK: {randomCard.atk}</Text>
          <Text style={styles.cardInfo}>DEF: {randomCard.def}</Text>
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
      <Button title="New Random Card" onPress={getRandomCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  cardContainer: {
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  cardInfo: {
    fontSize: 18,
    marginTop: 10,
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
  },
});