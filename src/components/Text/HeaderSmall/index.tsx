import React from 'react'
import {TextStyle} from "react-native";
import {Text} from "@ui-kitten/components";

export function HeaderSmall(props: {children?: string, style?: TextStyle, status?: string}) {
  return (
    <Text status={props.status} category={'p2'} appearance='hint' style={{
      textTransform: 'capitalize',
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}
