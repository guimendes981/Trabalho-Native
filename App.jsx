import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/Home';
import FlagScreen from './src/screens/Flag';
import Listagem from './src/screens/Listagem';

export default function App() {
  return (
    <SafeAreaView>
      <Listagem/>
    </SafeAreaView>
  );
}

