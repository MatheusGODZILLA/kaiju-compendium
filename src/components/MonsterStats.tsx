import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonsterStats = ({monster}: any) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Estatísticas</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.stat}>Era: {monster.era}</Text>
            <Text style={styles.stat}>Altura: {monster.height}m</Text>
            <Text style={styles.stat}>Peso: {monster.weight} Toneladas</Text>
          </View>
        </View>
      );
};

export default MonsterStats;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      marginTop: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
      textAlign: 'center',
    },
    statsContainer: {
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingTop: 10,
    },
    stat: {
      fontSize: 16,
      color: '#333',
      marginVertical: 5,
      fontWeight: '500',
    },
  });