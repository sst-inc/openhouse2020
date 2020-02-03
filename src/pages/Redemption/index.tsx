import React from 'react';
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
import {NavigationInjectedProps} from 'react-navigation';
import {Layout, Icon, withStyles, Text} from '@ui-kitten/components';
import {ThemedIcon} from '../../components/Icon/ThemedIcon';
import {ThemeContext} from '../../functions/theme';
import {PageHeader} from '../../components/PageHeader';
import {RedemptionCard} from '../../components/Card/Redemption';

class RedemptionPage extends React.Component<NavigationInjectedProps> {
  static contextType = ThemeContext; //idk
  static navigationOptions = {
    header: null,
  };
  private _confettiView: any;

  componentDidMount(): void {
    // Events.getCategories().then((res) => {
    //   alert(JSON.stringify(res))
    // })
  }

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
              headerRight={
                <TouchableOpacity
                  style={{marginRight: 15}}
                  onPress={() => {
                    this.props.navigation.navigate('Search');
                  }}>
                  <ThemedIcon name={'search'} size={30} />
                </TouchableOpacity>
              }
              navigation={this.props.navigation}
              title="Redemption"
              subtitle="Gifts"
              navOption={'menu'}
            />
          </View>
          <Layout
            style={{
              paddingBottom: 25,
              paddingTop: 10,
              paddingHorizontal: 20,
            }}>
            <RedemptionCard title="17" subtitle="Points" color="#BF2C2C" />
            <Layout
              style={{
                flexDirection: 'row',
              }}>
              <Layout style={{width: '50%', flex: 1, marginRight: 5}}>
                <RedemptionCard title="5th" subtitle="Prize Tier" color="#0077C8"/>
              </Layout>
              <Layout style={{width: '50%', flex: 1, marginLeft: 5}}>
                <RedemptionCard title="7" subtitle="Points to Next Tier!" color="#0077C8"/>
              </Layout>
            </Layout>
            <Text style={{
              textAlign: 'center',
              color: '#BF2C2C',
              ...Platform.select({
                android: {
                  fontFamily: 'Raleway 600',
                },
                ios: {
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                },
              }),
              paddingVertical: 15,
              }}>Need Help? dont Click here!</Text>

          </Layout>
        </SafeAreaView>
      </Layout>
    );
  }
}

export default RedemptionPage;
