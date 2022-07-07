import { View, Image, Text, StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  Header: {
    backgroundColor: '#424242',
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  HeaderAvatar: {
    position: 'absolute',
    top: -40,
    left: -170,
    width: 100,
    height: 100,
    borderRadius: 35,
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
})

export default function Header() {
  return (
    <View style={Style.Header}>
      <View>
        <Image
          style={Style.HeaderAvatar}
          source={require('./icon.jpg')}
          width={20}
        />
        <View>
          <Text style={Style.AccountBalance}>R$ 490 373,22</Text>
          <Text style={Style.BalanceDetails}>+15.35% </Text>
        </View>
      </View>
    </View>
  )
}
