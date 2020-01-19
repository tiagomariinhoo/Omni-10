
import React from 'react';
import { StatusBar } from 'react-native'
import Routes from './src/routes';
import {StyleSheet, Text, View} from 'react-native'


/**
 * Yarn start para executar a aplicação
 */


 /**
  * a View é como se fosse uma div (container)
  * o Text é um texto, span
  * 
  * A view recebe uma estilização que foi recebida lá embaixo
  */

// export default function App() {
//   return (
//     <View style={styles.container}> 
//       <Text style={styles.title}>Hello Omnistack!!</Text>
//     </View>
//   );
// }

// StyleSheet do reactNative
// Dentro passa um objeto com estilização
// Aqui não pode usar o hifen (-) do css, o que vier
// Depois do hifen, junta e fica com letra maiuscula
// NÃO CONTEM HERANÇA DE ESTILIZAÇÃO
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
//   title: {
//     fontWeight: "bold",
//     fontSize: 32,
//     color:'#FFF'
//   }
// });

/**
 * Tudo que for usar, vê na documentação do expo.io
 * Tipo os mapas: expo install react-native-maps 
 * E vê como usa na documentação
 */

export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor="#7D40E7"></StatusBar>
    <Routes/>
    </>
  );
}