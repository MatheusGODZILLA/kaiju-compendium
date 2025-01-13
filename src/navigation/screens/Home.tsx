import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Button } from 'react-native';

const background = { uri: 'https://godzilla.com/cdn/shop/files/monsterpedia_hp_desktop.png?v=1689050075&width=768media/Gg7zIt_X0AABxky?format=jpg&name=medium' };

export function Home({ navigation }: any) {
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <View style={styles.content}>
        <Text style={styles.title}>Kaiju Compendium</Text>
        <Text style={styles.description}>
          Explore o mundo dos monstros gigantes! Descubra informações detalhadas sobre os Kaijus mais
          icônicos.
        </Text>
        <Button title="Ver Lista de Kaijus" onPress={() => navigation.navigate('Kaiju')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f5cb42',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default Home;