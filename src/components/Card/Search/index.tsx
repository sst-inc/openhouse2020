// @Ryan

import React from 'react';
import {ImageURISource, View, TouchableOpacity, Platform} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';
import {ThemedIcon} from "../../Icon/ThemedIcon";
import {TouchableShadow} from "../../Shadow/Touchable";
import {Timing} from '../../Text/Timing'

export function SearchCard(props: { title: string; icon: string; onPress(): void; }) {
  return (
    <TouchableShadow style={{
      marginHorizontal: 25,
    }}>
      <Layout
        style={{
          paddingVertical: 25,
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
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          borderRadius: 5
        }}>
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
            fontSize: 25,
            color: '#0077C8',
            marginTop: 0,
            marginBottom: 20,
          }} category={'h6'}>
          {props.title}
        </Text>
        <Layout>
          <Timing upNext="1400" duration="1h" likes={40} />
        </Layout>
      </Layout>
    </TouchableShadow>
  );
};
