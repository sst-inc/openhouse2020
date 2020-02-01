import React from 'react'
import {TextStyle} from "react-native";
import {Text} from "@ui-kitten/components";

export function HeaderSmall(props: {children?: string, style?: TextStyle}) {
  return (
    <Text category={'p2'} appearance='hint' style={{
      textTransform: 'capitalize',
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}
