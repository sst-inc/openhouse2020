import React, {useContext} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView, TouchableOpacity,
} from 'react-native';
import {HeaderSmall} from '../../components/Text/HeaderSmall';
import {Header} from '../../components/Text/Header';
//@ts-ignore
import Confetti from 'react-native-confetti';
//@ts-ignore
import pvpTalk from '../../../assets/images/pvp_talk.png';
import {SpecialEventCard} from '../../components/Card/SpecialEvent';
import {NavigationInjectedProps} from 'react-navigation';
import {EventCard} from "../../components/Card/Event";
// @ts-ignore
import anniversaryConfetti from '../../../assets/images/anniversary_confetti.png'
// @ts-ignore
import {Layout, Icon, withStyles} from "@ui-kitten/components";
import {ThemedIcon} from "../../components/Icon/ThemedIcon";
import {ThemeContext} from "../../functions/theme";

class HomePage extends React.Component<NavigationInjectedProps> {
  static contextType = ThemeContext
  static navigationOptions = {
    header: null,
  };
  private _confettiView: any;

  render() {
    return (
      <Layout
        style={{
          flex: 1,
        }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <View
            style={{
              paddingTop: 10,
              paddingLeft: 25,
              paddingRight: 25,
              flexDirection: 'row',
              alignItems: 'center'
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
                D I S C O V E R
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
                Events
              </Header>
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row'
            }}>
              <ThemeContext.Consumer>
                {theme => <TouchableOpacity style={{marginRight: 15}} onPress={() => {
                  theme.toggleTheme()
                }}>
                  <ThemedIcon name={"search"} size={30}/>
                </TouchableOpacity>}
              </ThemeContext.Consumer>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Layout style={{
                  padding: 10,
                  borderRadius: 25,
                  elevation: 10,
                  shadowColor: 'black',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 0.16,
                  shadowRadius: 10,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 20
                }}>
                  <ThemedIcon name={'menu'} size={30}/>
                </Layout>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 25,
              paddingRight: 25,
              paddingLeft: 25,
              paddingTop: 25
            }}>
            <SpecialEventCard
              image={pvpTalk}
              title={'PVP Talk'}
              subtitle={'Auditorium'}
              time={`10.30am to\n11.30am`}
            />
            <EventCard
              title={`Driving to SST?`}
              onPress={() => {
                this.props.navigation.navigate("Anniversary")
              }}
            />
            <EventCard
              image={anniversaryConfetti}
              title={`10 Years of\nTransforming Learning`}
              onPress={() => {
                this.props.navigation.navigate('Anniversary');
              }}
            />
            <Header
              variant={4}
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
                marginTop: 20,
              }}>
              Categories
            </Header>
          </ScrollView>
        </SafeAreaView>
        <Confetti
          ref={(node: any) => (this._confettiView = node)}
          colors={['#E60233', '#0077C8', '#5F6A72']}
          duration={3000}
        />
      </Layout>
    );
  }
}

export default HomePage
