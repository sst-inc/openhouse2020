import React, {ReactNode} from 'react';
import {ImageBackground, ImageURISource, Platform, TouchableOpacity, View, ViewStyle} from "react-native";
import {Layout, Text} from "@ui-kitten/components";

export function EventCard(props: { title?: string, image?: ImageURISource, onPress(): void; children?: ReactNode; style?: ViewStyle }) {
  return (
    <TouchableOpacity onPress={() => {
      if (props.onPress) {
        props.onPress()
      }
    }} style={{
      width: '100%',
      marginTop: 15,
      ...Platform.select({
        ios: {
          elevation: 10,
          shadowColor: 'gray',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }
      })
    }}>
      <Layout style={{
        borderRadius: 5,
        overflow: 'hidden',
        ...Platform.select({
          android: {
            elevation: 10,
            shadowColor: 'gray',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.5,
            shadowRadius: 10,
          }
        }),
        ...props.style
      }}>
        {props.children ||
        <>{props.image ? (
          <ImageBackground source={props.image} style={{
            width: '100%', alignItems: 'center',
            justifyContent: 'center',
          }} resizeMode={'cover'}>
            <View style={{
              marginTop: 25,
              marginBottom: 25
            }}>
              <Text style={{
                ...Platform.select({
                  android: {
                    fontFamily: 'Raleway 700'
                  },
                  ios: {
                    fontFamily: 'Raleway',
                    fontWeight: '700'
                  }
                }),
                textAlign: 'center',
                lineHeight: 25,
                opacity: 0.75
              }} category={'h5'}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        ) : (
          <View style={{
            marginTop: 25,
            marginBottom: 25
          }}>
            <Text style={{
              ...Platform.select({
                android: {
                  fontFamily: 'Raleway 700'
                },
                ios: {
                  fontFamily: 'Raleway',
                  fontWeight: '700'
                }
              }),
              textAlign: 'center',
              lineHeight: 25,
              opacity: 0.75
            }} category={'h5'}>
              {props.title}
            </Text>
          </View>
        )}</>}
      </Layout>
    </TouchableOpacity>
  )
}
