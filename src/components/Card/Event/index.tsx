import React, {ReactNode} from 'react';
import {ImageBackground, ImageURISource, Platform, TouchableOpacity, View, ViewStyle} from "react-native";
import {Layout, Text} from "@ui-kitten/components";
import {TouchableShadow} from "../../Shadow/Touchable";

export function EventCard(props: { title?: string, image?: ImageURISource, onPress(): void; children?: ReactNode; style?: ViewStyle }) {
  return (
    <TouchableShadow onPress={() => {
      if (props.onPress) {
        props.onPress()
      }
    }} style={{
      width: '100%',
      marginTop: 15,
    }}>
      <Layout style={{
        borderRadius: 5,
        overflow: 'hidden',
        ...props.style,
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
    </TouchableShadow>
  )
}
