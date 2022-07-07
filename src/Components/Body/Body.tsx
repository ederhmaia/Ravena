import { View, StyleSheet } from 'react-native'
import CryptoCard from './Card/Card'

const styles = StyleSheet.create({
  Currency: {
    marginTop: 10,
  },
})

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
