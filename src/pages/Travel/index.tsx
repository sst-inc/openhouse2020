import React from 'react';
import {NavigationInjectedProps} from 'react-navigation';
import {SafeAreaView, View, Dimensions, Platform} from 'react-native';
import {Layout, Text, styled} from '@ui-kitten/components';
import {Header} from '../../components/Text/Header';
import {TransportNumberCard} from '../../components/Card/TransportNumber';

import Image from 'react-native-scalable-image';

import PageHeader from '../../components/PageHeader';

import sstmap from '../../../assets/images/sst_map.png';

class TravelPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = {
    header: null,
  };
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
          <Image
              width={Dimensions.get('window').width}
              source={sstmap}
              style={{marginTop: 10}}
            />
          <View style={{marginHorizontal: 20}}>
            <Header style={{fontSize: 20, marginTop: 10}}>Parking@SST</Header>
            <Text>
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
              }}>You are strongly encouraged <Text style={{
                textDecorationLine: 'underline',
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
                }}>not</Text> to park at SST. </Text>Please park in
              surrounding HDB estates and enter the school via Gate B or Gate D.
            </Text>
            <Header style={{fontSize: 20, marginTop: 10}}>MRT</Header>

            <Header style={{fontSize: 20, marginTop: 10}}>Bus</Header>
                <TransportNumberCard/>
          </View>
        </SafeAreaView>
      </Layout>
    );
  }
}

export default TravelPage;
