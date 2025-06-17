import React from 'react';
import {
  Button,
  Platform,
  Text,
  Vibration,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const Separador = () => {
  return <View style={Platform.OS === 'android' ? estilos.separador : null} />;
};

const App = () => {
  const UM_SEGUNDO_EM_MS = 1000;

  const PADRAO_VIBRACAO = [
    1 * UM_SEGUNDO_EM_MS,
    2 * UM_SEGUNDO_EM_MS,
    3 * UM_SEGUNDO_EM_MS,
  ];

  const DESCRICAO_PADRAO =
    Platform.OS === 'android'
      ? 'espera 1s, vibra 2s, espera 3s'
      : 'espera 1s, vibra, espera 2s, vibra, espera 3s';

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={[estilos.cabecalho, estilos.paragrafo]}>API de Vibração</Text>
      <View>
        <Button title="Vibrar uma vez" onPress={() => Vibration.vibrate()} />
      </View>
      <Separador />
      {/* Botão de vibração longa - disponível apenas no Android */}
      {Platform.OS === 'android'
        ? [
            <View key="vibracao-longa">
              <Button
                title="Vibrar por 10 segundos"
                onPress={() => Vibration.vibrate(10 * UM_SEGUNDO_EM_MS)}
              />
            </View>,
            <Separador key="separador-vibracao-longa" />,
          ]
        : null}
      <Text style={estilos.paragrafo}>Padrão: {DESCRICAO_PADRAO}</Text>
      <Button
        title="Vibrar com padrão"
        onPress={() => Vibration.vibrate(PADRAO_VIBRACAO)}
      />
      <Separador />
      <Button
        title="Vibrar com padrão repetido"
        onPress={() => Vibration.vibrate(PADRAO_VIBRACAO, true)}
      />
      <Separador />
      <Button
        title="Parar vibração"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  cabecalho: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragrafo: {
    margin: 24,
    textAlign: 'center',
  },
  separador: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;