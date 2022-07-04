import { View, StyleSheet } from 'react-native'
import CryptoCard from './Components/Card'

export default function Body() {
  return (
    <View>
      <View style={styles.Currency}>
        <CryptoCard Currency='bitcoin' />
        <CryptoCard Currency='ethereum' />
        <CryptoCard Currency='cardano' />
        <CryptoCard Currency='monero' />
        <CryptoCard Currency='ripple' />
        <CryptoCard Currency='litecoin' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Currency: {
    marginTop: -30,
  },
})
