import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Listagem from './src/screens/Listagem';

export default function App() {
  return (
    <SafeAreaView>
      <Listagem/>
    </SafeAreaView>
  );
}

