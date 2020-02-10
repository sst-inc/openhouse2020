import React from 'react';
import {
  Image,
  SafeAreaView, View,
} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {NavigationInjectedProps} from 'react-navigation';

import {Header} from '../../components/Text/Header';
import {PageHeader} from '../../components/PageHeader';
//@ts-ignore
import creditsImage from '../../../assets/images/credits.png'

class CreditsPage extends React.Component<NavigationInjectedProps> {
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
          <View style={{paddingHorizontal: 25, marginBottom: 10}}>
            <PageHeader navigation={this.props.navigation} title="Credits" navOption={'menu'}/>
          </View>
          <View style={{
            paddingLeft: 25,
            paddingRight: 25,
            flex: 1
          }}>
            <View style={{
              backgroundColor: 'white',
              borderRadius: 5,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image source={creditsImage} style={{
                width: '90%',
                height: '90%',
                resizeMode: 'contain'
              }}>
              </Image>
            </View>
            <View style={{marginTop: 15}}>
              <Header variant={5}>SST Inc.</Header>
              <Text category={'p1'}>
                Qin Guan {'\n'}Yee Jia Chen {'\n'}Jonathan Tan Jiayi {'\n'}Shannen
                Samuel Rajoo {'\n'}Ryan Theodore The {'\n'}
              </Text>
              <Header variant={5}>Images</Header>
              <Text category={'p1'}>
                https://icons8.com/ouch/ {'\n'}https://undraw.co/ {'\n'}
              </Text>
              <Header variant={5}>
                Fonts
              </Header>
              <Text category={'p1'}>
                IBM Plex Sans {'\n'}Raleway {'\n'}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </Layout>
    );
  }
}

export default CreditsPage;
