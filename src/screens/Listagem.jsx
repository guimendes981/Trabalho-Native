import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function Listagem({ navigation }) {
  const [dados, setDados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(40);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        setDados(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dados.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(dados.length / cardsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    console.log("clicou")
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cards de yu-gi-oh!</Text>
      <FlatList
        data={currentCards}
        keyExtractor={(card) => card.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detalhes', { card }); // Navegação 
            }}
            style={styles.cardLink}
          >
            <View style={styles.card}>
              <Image
                source={{ uri: item.card_images[0].image_url }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <Text style={styles.cardName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.pagination}>
        <TouchableOpacity
          onPress={handlePreviousPage}
          disabled={currentPage === 1}
          style={[styles.paginationButton, { opacity: currentPage === 1 ? 0.5 : 1 }]}
        >
          <Text>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNextPage}
          disabled={currentPage === totalPages}
          style={[styles.paginationButton, { opacity: currentPage === totalPages ? 0.5 : 1 }]}
        >
          <Text>Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  cardLink: {
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  paginationButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
