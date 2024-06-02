import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ReceitasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Receitas Screen</Text>
      <Button title="Ir para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReceitasScreen;