import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to Xfinity UI</Text>
        <Text style={styles.subtitle}>This is a minimal Expo React Native scaffold.</Text>
        <Button title="Press me" onPress={() => Alert.alert('Hello from Xfinity UI')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '90%',
    maxWidth: 420,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12
  }
});
