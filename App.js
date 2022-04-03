import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Hello')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <Button style={styles.button} title="Change text" onPress={() => setOutputText('Bye!')}/>
      <Button style={styles.button} title="Change color" onPress={() => setOutputText('Bye!')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  },
  button: {
    padding: '5px',
    color: 'green'
  }
});
