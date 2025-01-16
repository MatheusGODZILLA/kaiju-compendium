import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonsterStats = ({monster}: any) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Estatísticas</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statRow}>
              <Text style={styles.statTitle}>Era:</Text>
              <Text style={styles.statValue}>{monster.era}</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statTitle}>Altura:</Text>
              <Text style={styles.statValue}>{monster.height} Metros</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statTitle}>Peso:</Text>
              <Text style={styles.statValue}>{monster.weight} Toneladas</Text>
            </View>
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
    statRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    statTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: '#333',
    },
    statValue: {
      fontSize: 14,
      fontWeight: '400',
      color: '#333',
    },
  });