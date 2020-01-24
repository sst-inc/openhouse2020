import React from 'react';
import {ImageBackground, ImageURISource, Platform, Text, TouchableOpacity, View} from "react-native";

export function EventCard(props: { title: string, image?: ImageURISource, onPress(): void }) {
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
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.16,
          shadowRadius: 10,
        }
      })
    }}>
      <View style={{
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
        ...Platform.select({
          android: {
            elevation: 10,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.16,
            shadowRadius: 10,
          }
        })
      }}>
        {props.image ? (
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
                    fontFamily: 'Raleway 600'
                  },
                  ios: {
                    fontFamily: 'Raleway',
                    fontWeight: '600'
                  }
                }),
                fontSize: 20,
                color: '#616485',
                textAlign: 'center'
              }}>
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
              fontSize: 20,
              color: '#616485',
              textAlign: 'center'
            }}>
              {props.title}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}
