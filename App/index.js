// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterDisplay = () => {
  const [index, setIndex] = useState(0);

  const nextLetter = () => {
    setIndex((prevIndex) => (prevIndex + 1) % letters.length);
  };

  return (
    <View style={styles.letterContainer}>
      <Text style={styles.letter}>{letters[index]}</Text>
      <Button title="Next Letter" onPress={nextLetter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  letterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  letter: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Learn to Read</Text>
      <LetterDisplay />
    </SafeAreaView>
  );
}