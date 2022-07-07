import { ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Screens/Home'
import DefaultTheme from './src/Theme/theme.style'

export default function App() {
  return (
    <NavigationContainer>
      <ScrollView style={{ backgroundColor: DefaultTheme.BG_DARK }}>
        <Home />
      </ScrollView>
    </NavigationContainer>
  )
}
