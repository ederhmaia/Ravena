import { View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import DefaultTheme from '../../../../Theme/theme.style'

import { IProps } from './types'

export default function Chart(props: IProps) {
  return (
    <View>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={370} // from react-native
        height={200}
        yAxisLabel='$'
        yAxisSuffix='k'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '1',
            strokeWidth: '2',
            stroke: DefaultTheme.PRIMARY_COLOR,
          },
          propsForBackgroundLines: {
            strokeWidth: '0',
          },
        }}
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  )
}
