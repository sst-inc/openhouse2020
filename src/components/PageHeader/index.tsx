// @Ryan
import React, {ReactNode} from 'react';
import {
  View,
  Platform, StatusBar
} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {NavigationInjectedProps} from "react-navigation";

import {HeaderSmall} from '../../components/Text/HeaderSmall';
import {Header} from '../../components/Text/Header';
import {ThemedIcon} from '../../components/Icon/ThemedIcon';
import {TouchableShadow} from '../../components/Shadow/Touchable';
import {ThemeContext} from "../../functions/theme";

interface PageHeaderProps {
  navOption: 'menu' | 'back';
  title: string;
  subtitle?: string;
  headerRight?: ReactNode;
}

type Props = PageHeaderProps & NavigationInjectedProps

export function PageHeader(props: Props) {
  const isMenu = props.navOption === 'menu'
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5
      }}>
      <ThemeContext.Consumer>{theme =>
        <StatusBar barStyle={theme.theme === 'light' ? 'dark-content' : 'light-content'}/>
      }</ThemeContext.Consumer>
      <View>
        {props.subtitle ? (
          <HeaderSmall
            style={{
              textTransform: 'uppercase',
              letterSpacing: 4,
              ...Platform.select({
                android: {
                  fontFamily: 'Raleway 700'
                },
                ios: {
                  fontFamily: 'Raleway',
                  fontWeight: '700'
                }
              }),
            }}>
            {props.subtitle}
          </HeaderSmall>
        ) : null}
        <Header
          style={{
            fontSize: 30,
            ...Platform.select({
              android: {
                fontFamily: 'Raleway 700'
              },
              ios: {
                fontFamily: 'Raleway',
                fontWeight: '700'
              }
            }),
          }}>
          {props.title}
        </Header>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        {props.headerRight || null}
        <TouchableShadow onPress={() => isMenu ? props.navigation.openDrawer() : props.navigation.goBack()}>
          <Layout
            style={{
              padding: 10,
              borderRadius: 25,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
            }}>
            <ThemedIcon name={isMenu ? "menu" : "close"} size={30} />
          </Layout>
        </TouchableShadow>
      </View>
    </View>
  );
}

export default PageHeader
