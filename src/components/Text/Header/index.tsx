import React from 'react'
import {TextStyle, Platform} from "react-native";
import {Text} from "@ui-kitten/components";

export function Header(props: {children?: string, style?: TextStyle, variant?: number}) {
  return (
    <Text category={`h${props.variant || 1}`} style={{
      ...Platform.select({
        android: {
          fontFamily: 'Raleway 700'
        },
        ios: {
          fontFamily: 'Raleway',
          fontWeight: '700'
        }
      }),
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}
