import React, { useEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { Accelerometer } from 'expo-sensors';
import MonsterStats from '../../components/MonsterStats';

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
      <Image source={{ uri: monster.image }} style={styles.image} />
      <Text style={styles.name}>{monster.name}</Text>
      <Text style={styles.description}>{monster.description}</Text>
      <MonsterStats monster={monster} />
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
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  name: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: 10 
  },
  description: { 
    fontSize: 18, 
    textAlign: 'center', 
    color: '#666',
    marginVertical: 10 
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
});
