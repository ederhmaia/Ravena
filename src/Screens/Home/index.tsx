import { View, StyleSheet, ScrollView } from 'react-native'
import Body from '../../Components/Body/Body'
import Header from '../../Components/Header/Header'

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
})

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <Header />
        <Body />
      </View>
    </ScrollView>
  )
}
