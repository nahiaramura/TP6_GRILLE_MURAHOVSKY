import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ViewEjemplo() {
  return (
    <View style={estilos.contenedor}>
      <Text>Hola desde una View</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default ViewEjemplo;
