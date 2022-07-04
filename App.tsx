import { StyleSheet, View, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Header from './src/Components/Header'
import Body from './src/Components/Body'

import DefaultTheme from './src/Theme/theme.style'

const styles = StyleSheet.create({
  Container: {
    backgroundColor: DefaultTheme.BG_DARK,
    alignItems: 'center',
  },
})

export default function App() {
  return (
    <NavigationContainer>
      <ScrollView>
        <View style={styles.Container}>
          <Header />
          <Body />
        </View>
      </ScrollView>
    </NavigationContainer>
  )
}
