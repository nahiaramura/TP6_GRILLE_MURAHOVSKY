import React from 'react';
import { Button, View, Alert } from 'react-native';

function ButtonEjemplo() {
  function manejarPresion() {
    Alert.alert('¡Botón presionado!');
  }

  return (
    <View>
      <Button title="Presioname" onPress={manejarPresion} />
    </View>
  );
}

export default ButtonEjemplo;
