import React from 'react';
import { ImageBackground, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const background = require('../assets/footer_bg (1).png');

const MonsterCard = ({ monster, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <Image source={{ uri: monster.image }} style={styles.image} />
        <Text style={styles.name}>{monster.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: 10,
      padding: 5,
      marginBottom: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    background: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      flex: 1,
    },
  });

export default MonsterCard;