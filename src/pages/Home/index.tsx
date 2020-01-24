import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  ScrollView, TouchableOpacity,
} from 'react-native';
import Push from 'appcenter-push';
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
import Icon from 'react-native-vector-icons/Ionicons'

class HomePage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = {
    header: null,
  };
  private _confettiView: any;

  render() {
    return (
      <View
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
              <TouchableOpacity>
                <Icon name={'ios-search'} size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <View style={{
                  padding: 10,
                  borderRadius: 25,
                  elevation: 10,
                  shadowColor: 'black',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 0.16,
                  shadowRadius: 10,
                  backgroundColor: 'white',
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 20
                }}>
                  <Icon name={'ios-menu'} size={30}/>
                </View>
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
                opacity: 0.7,
                marginTop: 20,
                fontSize: 25,
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
      </View>
    );
  }
}

export default HomePage;
