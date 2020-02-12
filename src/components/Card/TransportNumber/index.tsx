import React from 'react';
import { Platform } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'


export const TransportNumberCard = (props: {color?: string, width?: number, number: string}) => {
  return (
    <Layout style={{
      backgroundColor: props.color ?? "#64C361",
      width: props.width ?? 50,
      height: 40,
      borderRadius: 9,
      justifyContent: 'center',
      marginRight: 5,
      marginBottom: 5
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
      }}>{props.number}</Text>
    </Layout>
  )
}