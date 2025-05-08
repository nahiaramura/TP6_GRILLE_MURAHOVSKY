import React from 'react';
import { FlatList, Text, View } from 'react-native';

function FlatListEjemplo() {
  const datos = [{ clave: 'Manzana' }, { clave: 'Banana' }, { clave: 'Naranja' }];

  function renderizarItem({ item }) {
    return <Text>{item.clave}</Text>;
  }

  return (
    <View>
      <FlatList data={datos} renderItem={renderizarItem} />
    </View>
  );
}

export default FlatListEjemplo;
