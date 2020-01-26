import React from 'react'
import {Text} from "@ui-kitten/components";
import {TextStyle} from "react-native";

export function Subtitle(props: {children?: string, style?: TextStyle, variant?: number}) {
  return (
    <Text category={`s${props.variant || 1}`} style={{
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}

