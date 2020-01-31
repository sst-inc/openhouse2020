import React from 'react'
import {Text} from "@ui-kitten/components";
import {TextStyle, Platform} from "react-native";

export function P(props: any) {
  return (
    <Text style={{
      ...Platform.select({
        android: {
          fontFamily: 'IBM Plex Sans 400'
        },
        ios: {
          fontFamily: 'IBM Plex Sans',
          fontWeight: '400'
        }
      }),
      fontSize: 18,
      lineHeight: 24,
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}
