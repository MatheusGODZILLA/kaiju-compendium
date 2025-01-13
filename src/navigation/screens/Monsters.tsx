import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';
import dataset from '../../data/Dataset';
import MonsterCard from '../../components/MonsterCard';

export function Monsters({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Monstro</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {dataset.map((monster, index) => (
          <MonsterCard
            key={index}
            monster={monster}
            onPress={() => navigation.navigate('Detalhes', { monster })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    paddingBottom: 20,
  },
  monsterButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  monsterText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
