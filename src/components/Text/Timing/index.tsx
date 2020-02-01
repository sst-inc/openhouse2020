// @Ryan
import React from 'react';
import {View, Platform, ViewStyle, TextStyle} from 'react-native';
import {Text} from '@ui-kitten/components';

export function Timing(props: {
  upNext: string;
  duration: string;
  likes: string;
}) {
  const TEXT_STYLE: TextStyle = {
    ...Platform.select({
      android: {
        fontFamily: 'Raleway 700',
      },
      ios: {
        fontFamily: 'Raleway',
        fontWeight: '700',
      },
    })
  }
  const SEPARATOR: ViewStyle = {
    marginHorizontal: 15,
    width: 1,
    height: '70%',
    backgroundColor: 'gray',
    marginTop: 5
  }
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text category={'h6'} style={[TEXT_STYLE]}>
          {props.upNext}
        </Text>
        <Text category={'c1'} style={{marginTop: 3}} appearance={'hint'}>
          Up Next
        </Text>
      </View>
      <View style={[SEPARATOR]}/>
      <View style={{alignItems: 'center'}}>
        <Text category={'h6'} style={[TEXT_STYLE]}>
          {props.duration}
        </Text>
        <Text category={'c1'} style={{marginTop: 3}} appearance={'hint'}>
          Duration
        </Text>
      </View>
      <View style={[SEPARATOR]}/>
      <View style={{alignItems: 'center'}}>
        <Text category={'h6'} style={[TEXT_STYLE]}>
          {props.likes}
        </Text>
        <Text category={'c1'} style={{marginTop: 3}} appearance={'hint'}>
          Likes
        </Text>
      </View>
    </View>
  )
}
