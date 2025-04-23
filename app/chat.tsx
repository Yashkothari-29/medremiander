import React from 'react';
import { View, StyleSheet } from 'react-native';
import HealthChatBot from './components/HealthChatBot';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <HealthChatBot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 