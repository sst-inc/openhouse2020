import React from 'react';
import {NavigationInjectedProps} from 'react-navigation';
import {
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import {Layout, Text, styled} from '@ui-kitten/components';
import {Header} from '../../components/Text/Header';
import {TransportNumberCard} from '../../components/Card/TransportNumber';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {processTheme, ThemeContext} from '../../functions/theme';

import Image from 'react-native-scalable-image';

import PageHeader from '../../components/PageHeader';

import sstmap from '../../../assets/images/sst_map.png';
import {Consumer} from 'react-native-paper/lib/typescript/src/core/settings';

class TravelPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const sstBuses = ['14', '74', '74E', '105', '106', '147', '166', '185'];
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Layout
            style={{
              flex: 1,
            }}>
            <SafeAreaView
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  paddingHorizontal: 25,
                }}>
                <PageHeader
                  navOption={'back'}
                  subtitle={'commute'}
                  title={'Getting to SST'}
                  navigation={this.props.navigation}
                />
              </View>
              <ScrollView>
                <Image
                  width={Dimensions.get('window').width}
                  source={sstmap}
                  style={{marginTop: 10}}
                />
                <View style={{marginHorizontal: 20}}>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Icon
                      name="map-marker-alt"
                      size={25}
                      color={theme.theme === 'light' ? 'black' : 'white'}
                      style={{marginTop: 12, marginRight: 10}}
                    />
                    <Header style={{fontSize: 20, textAlignVertical: 'center'}}>
                      Location
                    </Header>
                  </View>
                  <Text>1 Technology Drive, Singapore 138572</Text>

                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Icon
                      name="car"
                      size={25}
                      color={theme.theme === 'light' ? 'black' : 'white'}
                      style={{marginTop: 12, marginRight: 10}}
                    />
                    <Header style={{fontSize: 20}}>Parking@SST</Header>
                  </View>
                  <Text>
                    <Text
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
                      }}>
                      You are strongly encouraged{' '}
                      <Text
                        style={{
                          textDecorationLine: 'underline',
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
                        }}>
                        not
                      </Text>{' '}
                      to park at SST.{' '}
                    </Text>
                    Please park in surrounding HDB estates and enter the school
                    via Gate B or Gate D.
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Icon
                      name="subway"
                      size={25}
                      color={theme.theme === 'light' ? 'black' : 'white'}
                      style={{marginTop: 12, marginRight: 10}}
                    />
                    <Header style={{fontSize: 20}}>MRT</Header>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TransportNumberCard
                      number="EW22"
                      width={70}
                      color="#429346"
                    />
                    <View style={{marginLeft: 5}}>
                      <Text style={{
                        ...Platform.select({
                          ios: {
                            fontWeight: '700',
                            fontFamily: 'Raleway'
                          },
                          android: {
                            fontWeight: undefined,
                            fontFamily: 'Raleway 700'
                          },
                        }),
                      }}>Dover MRT Station</Text>
                      <Text>East-West Line</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Icon
                      name="bus"
                      size={25}
                      color={theme.theme === 'light' ? 'black' : 'white'}
                      style={{marginTop: 12, marginRight: 10}}
                    />
                    <Header style={{fontSize: 20}}>Bus</Header>
                  </View>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {sstBuses.map((content, index) => {
                      return (
                        <TransportNumberCard number={content} key={index} />
                      );
                    })}
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Layout>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default TravelPage;
