import React, { useEffect } from 'react'
import { Button, View, SafeAreaView, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';

function App() {

  firebase.analytics().logEvent('Pagina_Home', {});

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="BOTAO"
        onPress={async () =>
          await analytics().logEvent('Botao1_Click', {
            id: 1234,
            nome: 'Meu Nome',
            empresa: 'Nome Empresa',
          })
        }
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

export default App;