import React from 'react'
import {Text} from "@ui-kitten/components";
import {TextStyle} from "react-native";

export function Header(props: {children?: string, style?: TextStyle, variant?: number}) {
  return (
    <Text category={`h${props.variant || 1}`} style={{
      textTransform: 'capitalize',
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}
