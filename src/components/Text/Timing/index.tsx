// @Ryan

import React from 'react';
import {ImageURISource, View, TouchableOpacity, Platform} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';
import {Svg, Line} from 'react-native-svg';
import {ThemedIcon} from '../../Icon/ThemedIcon';
import {TouchableShadow} from '../../Shadow/Touchable';

export function Timing(props: {
  upNext: string;
  duration: string;
  likes: number;
}) {
  const textStyle = {
    ...Platform.select({
      android: {
        fontFamily: 'Raleway 700',
        textAlign: 'center',
      },
      ios: {
        fontFamily: 'Raleway',
        fontWeight: '700',
        textAlign: 'center',
      },
    }),
  };
  return (
    <Layout style={{flexDirection: 'row'}}>
      <Layout style={{flexDirection: 'column'}}>
        <Text
          style={{
            ...textStyle,
            fontSize: 20,
          }}>
          {props.upNext}
        </Text>
        <Text
          style={{
            ...textStyle,
            color: '#717171',
            fontSize: 10,
          }}>
          Up next
        </Text>
      </Layout>
      <Svg height="45" width="25">
        <Line x1="12.5" y1="5" x2="12.5" y2="38" stroke="#717171" strokeWidth="1"/>
      </Svg>
      <Layout style={{flexDirection: 'column'}}>
        <Text
          style={{
            ...textStyle,
            fontSize: 20,
          }}>
          {props.duration}
        </Text>
        <Text
          style={{
            ...textStyle,
            color: '#717171',
            fontSize: 10,
          }}>
          Duration
        </Text>
      </Layout>
      <Svg height="45" width="25">
        <Line x1="12.5" y1="5" x2="12.5" y2="38" stroke="#717171" strokeWidth="1"/>
      </Svg><Layout style={{flexDirection: 'column'}}>
        <Text
          style={{
            ...textStyle,
            fontSize: 20,
          }}>
          {props.likes.toString()}
        </Text>
        <Text
          style={{
            ...textStyle,
            color: '#717171',
            fontSize: 10,
          }}>
          Likes
        </Text>
      </Layout>
    </Layout>
  );
}
