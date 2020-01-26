import {Icon, withStyles} from "@ui-kitten/components";
import {processTheme, ThemeContext} from "../../../functions/theme";
import React from "react";
import {ViewStyle} from "react-native";

function TI(props: { name: string; size: number; themedStyle?: any; style?: ViewStyle}) {
  return (
    <ThemeContext.Consumer>
      {theme => <Icon style={props.style} name={props.name} width={props.size} height={props.size}
                      fill={processTheme(theme.theme === 'light' ? props.themedStyle.darkFill : props.themedStyle.lightFill )}/>}
    </ThemeContext.Consumer>
  )
}

export const ThemedIcon = withStyles(TI, (theme) => ({
  lightFill: theme['color-basic-100'],
  darkFill: theme['color-primary-900']
}))
