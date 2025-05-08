import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ViewEjemplo from '../componentes/ViewEjemplo';
import TextEjemplo from '../componentes/TextEjemplo';
import ImageEjemplo from '../componentes/ImageEjemplo';
import TextInputEjemplo from '../componentes/TextInputEjemplo';
import ButtonEjemplo from '../componentes/ButtonEjemplo';
import ScrollViewEjemplo from '../componentes/ScrollViewEjemplo';
import FlatListEjemplo from '../componentes/FlatListEjemplo';
//npx expo start --tunnel

export default function App() {
return (
<ScrollView contentContainerStyle={styles.container}>
<ViewEjemplo />
<TextEjemplo />
<ImageEjemplo />
<TextInputEjemplo />
<ButtonEjemplo />
<ScrollViewEjemplo />
<FlatListEjemplo />
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
flexGrow: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},
});