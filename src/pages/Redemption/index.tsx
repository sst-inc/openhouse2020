import React from 'react';
import {
  View,
  SafeAreaView,
  Platform, ScrollView, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import {Layout, Text} from '@ui-kitten/components';
import {PageHeader} from '../../components/PageHeader';
import {RedemptionCard} from '../../components/Card/Redemption';
import QRCode from 'react-native-qrcode-svg';
//@ts-ignore
import redemption from '../../../assets/images/redemption.png'
import {ThemeContext} from "../../functions/theme";

//TODO - admin for sls

class RedemptionPage extends React.Component<NavigationInjectedProps> {
  render() {
    return (
      <Layout
        style={{
          flex: 1,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <View style={{paddingHorizontal: 25}}>
            <PageHeader
              navigation={this.props.navigation}
              title="Redemption"
              subtitle="Gifts"
              navOption={'menu'}
            />
          </View>
          <View
            style={{
              paddingBottom: 25,
              paddingTop: 10,
              paddingHorizontal: 20,
              flex: 1
            }}>
            <View style={{flex: 3, justifyContent: 'center'}}>
              <View style={{
                alignItems: 'center',
                marginVertical: 25
              }}>
                <ThemeContext.Consumer>{theme =>
                  <QRCode
                    value={'someuserID'}
                    size={Dimensions.get("window").height/4}
                    backgroundColor={'transparent'}
                    color={theme.theme === 'light' ? 'black' : 'white'}
                    // logo={sst}
                    // logoBackgroundColor={'white'}
                    // logoSize={100}
                  />
                }</ThemeContext.Consumer>
                <Text appearance={'hint'} style={{marginTop: 10}}>
                  {"someuserID"}
                </Text>
              </View>
              <RedemptionCard title="17" subtitle="Points" status="danger" subtitleStyle={{opacity: 0.5}}/>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15
                }}>
                <Layout style={{flex: 1, marginRight: 5}}>
                  <RedemptionCard title="5th" subtitle="Prize Tier" status={'primary'} subtitleStyle={{opacity: 0.5}}/>
                </Layout>
                <Layout style={{flex: 1, marginLeft: 5}}>
                  <RedemptionCard title="7" subtitle="Points to Next Tier!" status={'primary'}
                                  subtitleStyle={{opacity: 0.5}}/>
                </Layout>
              </View>
              <TouchableOpacity style={{
                alignSelf: 'center',
                paddingVertical: 20
              }}>
                <Text style={{
                  ...Platform.select({
                    android: {
                      fontFamily: 'Raleway 600',
                    },
                    ios: {
                      fontFamily: 'Raleway',
                      fontWeight: '600',
                    },
                  }),
                  opacity: 0.5,
                }} status={'danger'}>
                  Need Help? Click here!
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <Image source={redemption} style={{
                  resizeMode: 'contain',
                  width: '100%',
                  height: '100%',
                }}/>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Layout>
    );
  }
}

export default RedemptionPage;
