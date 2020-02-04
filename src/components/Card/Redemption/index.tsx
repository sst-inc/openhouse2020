import React from 'react';
import {TextStyle} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {Header} from '../../Text/Header';
import {HeaderSmall} from '../../Text/HeaderSmall';
import {ViewShadow} from '../../Shadow/View';

export const RedemptionCard = (props: {
  title: string;
  subtitle: string;
  status?: string;
  style?: any;
  subtitleStyle?: TextStyle
}) => {
  return (
    <ViewShadow>
      <Layout
        level={'2'}
        style={{
          width: '100%',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          alignItems: 'center'
        }}>
        <Header variant={4} status={props.status} style={{marginBottom: 3}}>
          {props.title}
        </Header>
        <HeaderSmall status={props.status} style={props.subtitleStyle}>
          {props.subtitle}
        </HeaderSmall>
      </Layout>
    </ViewShadow>
  );
};
