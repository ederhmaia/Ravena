import { View, Text, StyleSheet, Image, Pressable } from 'react-native'

import CurrencyMap from './../../../../Settings/CurrencyMap'
import DefaultTheme from './../../../../Theme/theme.style'

interface ICardProps {
  Currency: string
}

const Style = StyleSheet.create({
  Card: {
    backgroundColor: DefaultTheme.SURFACE_COLOR,
    borderRadius: 20,
    paddingVertical: 30,
    marginVertical: 3,
    width: 380,
  },
  CardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DefaultTheme.TEXT_LIGHT,
    marginTop: 5,
  },
  Price: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: 'white',
  },
  Rewards: {
    paddingHorizontal: 20,
    color: DefaultTheme.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  CurrencyImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  CardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CardLeft: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    left: '10%',
  },
})

export default function CryptoCard(props: ICardProps) {
  const CurrencyName = props.Currency.toLowerCase()
  return (
    <Pressable
      onPress={() => {
        console.log(props.Currency)
        // to do when click on card
      }}
      style={Style.Card}
    >
      <View style={Style.CardContent}>
        <View style={Style.CardLeft}>
          <Image
            style={Style.CurrencyImage}
            source={CurrencyMap[CurrencyName].asset}
          />
          <Text style={Style.CardLabel}>
            {CurrencyMap[CurrencyName].symbol}
          </Text>
        </View>

        {/* col 2 */}
        <View style={{ flexDirection: 'column' }}>
          <Text style={Style.Price}>R$ 3232</Text>
          <Text style={Style.Rewards}>+13%</Text>
        </View>
      </View>
    </Pressable>
  )
}
