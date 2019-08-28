import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('BLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH')

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="PUSH ME" onPress={()=>setOutputText('The Text Changed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
