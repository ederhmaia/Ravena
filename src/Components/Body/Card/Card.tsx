import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import Chart from './Charts/Chart'

import CurrencyMap from '../../../Settings/CurrencyMap'
import DefaultTheme from '../../../Theme/theme.style'
import ShouldRender from '../../ShouldRender'
import Client from '../../../Services/Client'

import { ICardProps, IGetPriceResponse } from './types'

const Style = StyleSheet.create({
  Card: {
    backgroundColor: DefaultTheme.SURFACE_COLOR,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 3,
    width: 380,
  },
  CardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  CurrencyImage: {
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 5,
  },
  CardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DefaultTheme.TEXT_LIGHT,
    marginTop: 5,
  },
  AboutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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

  Chart: {},
})

export default function CryptoCard(props: ICardProps) {
  const currency_name: string = props.Currency.toLowerCase()
  const [visible, setVisible] = useState(false)

  const [price, setPrice] = useState(0)

  useEffect(() => {
    Client.get(`/simple/price?ids=${currency_name}&vs_currencies=usd`).then(
      (res: IGetPriceResponse) => {
        console.log(res.data)
      }
    )
  }, [])

  return (
    <Pressable
      onPress={() => {
        setVisible(!visible)
      }}
      style={Style.Card}
    >
      <View style={Style.CardHeader}>
        <View style={Style.AboutContainer}>
          <Image
            style={Style.CurrencyImage}
            source={CurrencyMap[currency_name].asset}
          />
          <Text style={Style.CardLabel}>{CurrencyMap[currency_name].name}</Text>
        </View>

        <Text style={Style.Price}>R$ 3232</Text>
        <Text style={Style.Rewards}>+13%</Text>
      </View>
      <ShouldRender if={visible}>
        <View style={Style.Chart}>
          <Chart currency={props.Currency} />
        </View>
      </ShouldRender>
    </Pressable>
  )
}
