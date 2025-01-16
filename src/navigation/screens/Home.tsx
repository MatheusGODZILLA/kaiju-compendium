import React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const background = { uri: 'https://godzilla.com/cdn/shop/files/monsterpedia_hp_desktop.png?v=1689050075&width=768media/Gg7zIt_X0AABxky?format=jpg&name=medium' };

export function Home({ navigation }: any) {
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <View style={styles.content}>
        <Image source={require('../../assets/Kaiju Compendium.png')} style={{ width: 350, height: 180 }} />
        <Text style={styles.description}>
          Descubra informações detalhadas sobre os Kaijus mais icônicos.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Kaiju')}>
            <Text style={styles.buttonText}>Ver Lista de Kaijus</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#f5cb42',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default Home;