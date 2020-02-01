// @Ryan
import React from 'react';
import {ImageURISource, View, TouchableOpacity, Platform} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';

import {ThemedIcon} from "../../Icon/ThemedIcon";
import {TouchableShadow} from "../../Shadow/Touchable";

export function CategoryCard(props: { title: string; icon: string; onPress(): void; }) {
  return (
    <TouchableShadow style={{
      marginRight: 25,
    }} onPress={() => {
      if (props.onPress) {
        props.onPress()
      }
    }}>
      <Layout
        style={{
          paddingVertical: 40,
          paddingHorizontal: 20,
          ...Platform.select({
            android: {
              elevation: 10,
              shadowColor: 'gray',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.25,
              shadowRadius: 10,
            }
          }),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5
        }}>
        <ThemedIcon name={props.icon} size={40}/>
        <Text
          style={{
            ...Platform.select({
              android: {
                fontFamily: 'Raleway 700'
              },
              ios: {
                fontFamily: 'Raleway',
                fontWeight: '700'
              }
            }),
            opacity: 0.75,
            marginTop: 10
          }} category={'h6'}>
          {props.title}
        </Text>
      </Layout>
    </TouchableShadow>
  );
};
