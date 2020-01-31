// @Ryan

import React, {useContext} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {HeaderSmall} from '../../components/Text/HeaderSmall';
import {Header} from '../../components/Text/Header';
//@ts-ignore
import Confetti from 'react-native-confetti';
//@ts-ignore
import pvpTalk from '../../../assets/images/pvp_talk.png';
import {SpecialEventCard} from '../../components/Card/SpecialEvent';
import {NavigationInjectedProps} from 'react-navigation';
import {EventCard} from '../../components/Card/Event';
// @ts-ignore
import anniversaryConfetti from '../../../assets/images/anniversary_confetti.png';
// @ts-ignore
import {Layout, Icon, withStyles, Text} from '@ui-kitten/components';
import {ThemedIcon} from '../../components/Icon/ThemedIcon';
import {ThemeContext} from '../../functions/theme';
// @ts-ignore
import gettingToSST from '../../../assets/images/getting_to_sst.png';
import {CategoryCard} from '../../components/Card/Category';
import {DetailCard} from '../../components/Card/Detail';
import {TouchableShadow} from '../../components/Shadow/Touchable';

export function PageHeader(props: {
  title: string;
  subtitle: string;
  searchTrue: boolean;
  navigation: any;
}) {
  const searchBar = props.searchTrue ? (
    <ThemeContext.Consumer>
          {theme => (
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={() => {
                theme.toggleTheme();
              }}>
              <ThemedIcon name={'search'} size={30} />
            </TouchableOpacity>
          )}
        </ThemeContext.Consumer>
  ) : (<Layout />)

  return (
    <View
      style={{
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View>
        <HeaderSmall
          style={{
            ...Platform.select({
              ios: {
                fontFamily: 'Raleway',
              },
              android: {
                fontWeight: undefined,
                fontFamily: 'Raleway 700',
              },
            }),
          }}>
          {props.subtitle}
        </HeaderSmall>
        <Header
          style={{
            ...Platform.select({
              ios: {
                fontWeight: '700',
                fontFamily: 'Raleway',
              },
              android: {
                fontWeight: undefined,
                fontFamily: 'Raleway 700',
              },
            }),
            marginTop: 5,
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
        {searchBar}
        <TouchableShadow onPress={() => props.navigation.openDrawer()}>
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
            <ThemedIcon name={'menu'} size={30} />
          </Layout>
        </TouchableShadow>
      </View>
    </View>
  );
}

export default PageHeader;
