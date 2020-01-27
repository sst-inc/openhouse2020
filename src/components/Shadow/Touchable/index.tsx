import React from 'react';
import {TouchableOpacity, ViewStyle} from "react-native";
import {ThemeContext} from "../../../functions/theme";

export function TouchableShadow(props: {intensity?: number; children?: React.ReactNode; style?: ViewStyle; onPress?(): void}) {
  return (
   <ThemeContext.Consumer>
     {theme =>
       <TouchableOpacity style={{
         elevation: (props.intensity || 2) * 5,
         shadowColor: theme.theme === 'light' ? "gray" : 'black',
         shadowOffset: {width: 0, height: 0},
         shadowOpacity: 0.5,
         shadowRadius: (props.intensity || 1) * 3,
         ...props.style
       }} onPress={() => {
         if (props.onPress) {
           props.onPress()
         }
       }}>
         {props.children}
       </TouchableOpacity>}
   </ThemeContext.Consumer>
  )
}
