// @Ryan

import React from 'react';
import {View, Platform} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {TouchableShadow} from "../../Shadow/Touchable";
import {Timing} from '../../Text/Timing'

export function DetailCard(props: { title: string; onPress(): void; upNext: string; duration: string; likes: string }) {
  return (
    <TouchableShadow onPress={() => {
      if (props.onPress) {
        props.onPress()
      }
    }}>
      <Layout
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
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
          }} category={'h4'} status={'primary'}>
          {props.title}
        </Text>
        <View style={{
          marginTop: 10
        }}>
          <Timing upNext={props.upNext} duration={props.duration} likes={props.likes}/>
        </View>
      </Layout>
    </TouchableShadow>
  );
};
