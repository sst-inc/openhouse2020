import React from 'react'
import {TextStyle} from "react-native";
import {Text} from "@ui-kitten/components";

export function Subtitle(props: {children?: string, style?: TextStyle, variant?: number}) {
  return (
    <Text category={`s${props.variant || 1}`} style={{
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}

