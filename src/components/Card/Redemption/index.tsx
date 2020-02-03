import React, { ReactNode } from 'react';
import {Platform} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {Header} from '../../Text/Header';
import {HeaderSmall} from '../../Text/HeaderSmall';
import {ViewShadow} from '../../Shadow/View';
import {ThemeContext} from '../../../functions/theme'

export const RedemptionCard = (props: {
  title: string;
  subtitle: string;
  color: string;
  style?: any;
}) => {
  return (
    <ThemeContext.Consumer>
      {theme =>
        <ViewShadow>
        <Layout
          style={{
            width: '100%',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginVertical: 5.5,
          }}>
          <Header
            style={{
              color: theme.theme === 'light' ? props.color : 'white',
              textAlign: 'center',
              fontSize: 30,
              lineHeight: 30
            }}>
            {props.title}
          </Header>
          <HeaderSmall
            style={{
              color: theme.theme === 'light' ? props.color : 'white',
              opacity: 0.6,
              textAlign: 'center',
              fontSize: 10,
              ...Platform.select({
                android: {
                  fontFamily: 'Raleway 700',
                },
                ios: {
                  fontFamily: 'Raleway',
                  fontWeight: '700',
                },
              }),
            }}>
            {props.subtitle}
          </HeaderSmall>
        </Layout>
      </ViewShadow>}
    </ThemeContext.Consumer>
    
  );
};
