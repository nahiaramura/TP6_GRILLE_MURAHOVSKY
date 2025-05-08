import React from 'react';
import { TextInput, View } from 'react-native';

function TextInputEjemplo() {
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        placeholder="Escribí tu nombre"
      />
    </View>
  );
}

export default TextInputEjemplo;
