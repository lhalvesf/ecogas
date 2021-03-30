import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import CurrencyInput from 'react-native-currency-input';

export default function App() {

  /* 
  |
  | States
  |
  */
  const [ gasPrice, setGasPrice ] = useState(0)
  const [ etaPrice, setEtaPrice ] = useState(0)
  const [ isExpansive, setIsExpansive ] = useState('')  

  /* 
  |
  | Functions
  |
  */
  const checkPrices = useEffect(() => {
    const c = etaPrice / gasPrice
    c > 0.75 ? setIsExpansive('Gasolina') : setIsExpansive('Etanol')
    if ( Number.isNaN(c) || c == 0 ) 
      setIsExpansive('')
    

  }, [etaPrice, gasPrice]);
  
  /* 
  |
  | Render
  |
  */
  return (
    <View style={styles.container}>
      <Image source={require('./assets/gas-station.png')} style={{ height: 92, width: 92, marginBottom: 50 }} />
      <Text style={{ fontSize: 31, marginBottom: 15 }}>Etanol ou gasolina?</Text>
      <Text style={{ fontSize: 17, marginBottom: 15 }}>Calcule qual compensa mais</Text>
      <Text style={{ fontSize: 17 }}>Preço Gasolina</Text>
      <CurrencyInput
        ignoreNegative={true}
        value={gasPrice}
        minValue={0}
        onChangeValue={ setGasPrice }
        unit="R$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="0,00"
        style={styles.input}
      />
      <Text style={{ fontSize: 17, marginBottom: 15 }}>Preço Etanol</Text>
      <CurrencyInput
        ignoreNegative={true}
        minValue={0}
        value={ etaPrice }
        onChangeValue={setEtaPrice}
        unit="R$"
        delimiter=","
        separator="."
        precision={2}
        placeholder="0,00"
        style={styles.input}
      />
      <Text style={{ fontSize: 31, marginTop: 25, textTransform: 'uppercase' }}>{ isExpansive }</Text>
      <Image source={require('./assets/parrot.png')} style={{ height: 30, width: 30, marginTop: 50 }} />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE600',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  input: {
    fontSize: 21,
    marginBottom: 15,
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: '100%',
    borderRadius: 15
  }
});
