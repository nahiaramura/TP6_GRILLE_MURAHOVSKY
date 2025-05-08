import React from 'react';
import { ScrollView, Text, View } from 'react-native';

function ScrollViewEjemplo() {
  return (
    <ScrollView>
      <View>
        {[...Array(20)].map(function (_, i) {
          return <Text key={i}>Elemento {i + 1}</Text>;
        })}
      </View>
    </ScrollView>
  );
}

export default ScrollViewEjemplo;
