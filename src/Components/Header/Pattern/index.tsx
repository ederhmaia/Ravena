import { View } from 'react-native'

export default function Pattern() {
  const Radious = () => Math.floor(Math.random() * 60)
  const Top = () => Math.floor(Math.random() * 100)
  const Right = () => Math.floor(Math.random() * 100)

  return (
    <>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: Radious() / 2,
          padding: Radious(),
          borderWidth: 1,
          borderColor: 'red',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: Top(),
            right: Right(),
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: Radious() / 2,
            padding: Radious(),
            borderWidth: 1,
            borderColor: 'red',
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: Top(),
              right: Right(),
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: Radious() / 2,
              padding: Radious(),
              borderWidth: 1,
              borderColor: 'red',
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: Top(),
                right: Right(),
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: Radious() / 2,
                padding: Radious(),
                borderWidth: 1,
                borderColor: 'red',
              }}
            ></View>
          </View>
        </View>
      </View>
    </>
  )
}
