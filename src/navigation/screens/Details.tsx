import React, { useEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView, View, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { Accelerometer } from 'expo-sensors';
import MonsterStats from '../../components/MonsterStats';

const background = require('../../assets/footer_bg (1).png');

export function Details({ route }: any) {
  const { monster } = route.params;

  const playRoar = async () => {
    const { sound } = await Audio.Sound.createAsync(monster.roar);
    await sound.playAsync();
  };

  useEffect(() => {
    const sub = Accelerometer.addListener(({ x, y, z }) => {
      if (Math.abs(x) > 1.5 || Math.abs(y) > 1.5 || Math.abs(z) > 1.5) {
        playRoar();
      }
    });

    return () => sub.remove();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{monster.name}</Text>
      <Image source={{ uri: monster.image }} style={styles.image}/>
      <Text style={styles.subtitle}>{monster.subtitle}</Text>
      <Text style={styles.description}>{monster.description}</Text>
      <MonsterStats monster={monster} />

      <View style={styles.roarContainer}>
        <ImageBackground source={background} resizeMode="cover" style={styles.background}>
            <Text style={styles.roar}>🔊  Agite o telefone para ouvir o rugido</Text>
        </ImageBackground>
      </View>     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: { 
    flexGrow: 1, 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  image: { 
    width: 320, 
    height: 320, 
    borderRadius: 16, 
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#000',
  },
  name: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: 15 
  },
  subtitle: {
    fontSize: 22,
    color: '#555',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: { 
    fontSize: 16, 
    textAlign: 'justify', 
    color: '#666',

  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 12,
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  details: { 
    fontSize: 16, 
    marginVertical: 5, 
    color: '#333', 
    fontWeight: '500' 
  },
  roarContainer: {
    width: '100%',
    height: 50, 
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  roar: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12
  }
});
