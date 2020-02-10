import React from 'react';
import { Platform } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'


export const TransportNumberCard = (props: {color?: string}) => {
  return (
    <Layout style={{
      backgroundColor: props.color ?? "#64C361",
      width: 50,
      height: 40,
      borderRadius: 9,
      justifyContent: 'center'
      }}>
      <Text style={{
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        ...Platform.select({
          ios: {
            fontWeight: '700',
            fontFamily: 'Raleway'
          },
          android: {
            fontWeight: undefined,
            fontFamily: 'Raleway 700'
          },
        }),
        }}>17</Text>
    </Layout>
  )
}