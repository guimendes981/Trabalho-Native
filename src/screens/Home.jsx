import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [countries, setCountries] = useState([]);

  useEffect( async() => {
    // Faz a chamada à API para buscar informações dos países
    await axios
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        // Pega os primeiros 10 países da resposta
        const firstTenCards = response.data;
        console.log(response)
        setCountries(firstTenCards);
      })
      .catch((error) => {
        console.error('Erro ao buscar países:', error);
      });
  }, []);
//   console.log(countries);
  const renderItem = ({ item }) => (
    <View style={styles.countryItem}>
      {/* <Image style={styles.flag} source={{ uri: item.image_url }} /> */}
      <Text></Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Países com Bandeiras</Text>
      <FlatList
        data={countries}
        renderItem={(item) => <>{item.name}</>}
        keyExtractor={(item) => item.cca2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  countryItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  flag: {
    width: 100,
    height: 60,
  },
});