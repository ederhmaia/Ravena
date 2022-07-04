import { View, Image, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#424242',
    height: 230,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: -50,
  },
  HeaderAvatar: {
    position: 'absolute',
    top: -20,
    left: -170,
    width: 100,
    height: 100,
    borderRadius: 35,
    resizeMode: 'contain',
  },
  AccountBalance: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    top: -20,
    left: -30,
    color: '#5fd8c8',
  },
  BalanceDetails: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: 25,
    top: 10,
    left: -30,
    color: 'rgb(255, 255, 255)',
  },

  FirstRow: {},
})

export default function Header() {
  return (
    <View style={styles.Header}>
      <View style={styles.FirstRow}>
        <Image
          style={styles.HeaderAvatar}
          source={require('./icon.jpg')}
          width={20}
        />
        <Text style={styles.AccountBalance}>R$ 490 373,22</Text>
        <Text style={styles.BalanceDetails}>+15.35% </Text>
      </View>
    </View>
  )
}
