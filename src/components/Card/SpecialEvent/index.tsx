import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {Image, Platform, View} from "react-native";
import {Text} from "@ui-kitten/components";
import {Subtitle} from "../../Text/Subtitle";
import {PrimaryButton} from "../../Button/Primary";
import {withStyles} from '@ui-kitten/components';
import {processTheme, ThemeContext} from "../../../functions/theme";

function SEC(props: { image?: any; title: string; subtitle?: string; time: string; gradient?: string[], themedStyle?: any }) {
  return (
    <View style={{
      width: '100%',
      borderRadius: 5,
      elevation: 10,
      shadowColor: 'gray',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      backgroundColor: 'white',
    }}>
      <ThemeContext.Consumer>
        {theme => <LinearGradient angle={135} useAngle={true}
                                  colors={props.gradient || [processTheme(theme.theme === 'light' ? props.themedStyle.lightGradient1 : props.themedStyle.darkGradient1), processTheme(theme.theme === 'light' ? props.themedStyle.lightGradient2 : props.themedStyle.darkGradient2)]}
                                  style={{
                                    flex: 1,
                                    padding: 20,
                                    flexDirection: 'row',
                                    borderRadius: 5,
                                    overflow: 'hidden',
                                  }}>
          <View style={{flex: 1}}>
            <Text style={{
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
            }} category={'h4'}>
              {props.title}
            </Text>
            <Subtitle style={{
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
              opacity: 0.7
            }}>
              {props.subtitle}
            </Subtitle>
            <View style={{
              flex: 1,
              justifyContent: 'center',
            }}>
              <Text style={{
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
                marginTop: 25,
                marginBottom: 25
              }} category={'p1'}>{props.time}</Text>
            </View>
            <PrimaryButton title={"Set a reminder"}/>
          </View>
          <View style={{flex: 1, marginLeft: 15}}>
            <Image style={{
              height: '100%',
              resizeMode: 'contain',
              width: '100%'
            }} source={props.image}/>
          </View>
        </LinearGradient>}
      </ThemeContext.Consumer>
    </View>
  )
}

export const SpecialEventCard = withStyles(SEC, (theme) => ({
  darkGradient1: theme['color-danger-400'],
  darkGradient2: theme['color-danger-500'],
  lightGradient1: theme['color-danger-transparent-300'],
  lightGradient2: theme['color-danger-transparent-600']
}))
