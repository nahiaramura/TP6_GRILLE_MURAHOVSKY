import React from 'react';
import { Image, View } from 'react-native';

function ImageEjemplo() {
  return (
    <View>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

export default ImageEjemplo;
