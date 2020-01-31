import React, {useContext} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView, TouchableOpacity, Image, FlatList,
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
import gettingToSST from '../../../assets/images/getting_to_sst.png'
import {CategoryCard} from "../../components/Card/Category";
import {DetailCard} from "../../components/Card/Detail";
import {TouchableShadow} from "../../components/Shadow/Touchable";

import {PageHeader} from '../../components/PageHeader'
class HomePage extends React.Component<NavigationInjectedProps> {
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
        <ThemeContext.Consumer>{theme =>
          <StatusBar barStyle={theme.theme === 'light' ? 'dark-content' : 'light-content'}/>
        }</ThemeContext.Consumer>
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <PageHeader {...this.props} title="Events" subtitle="Discover" searchTrue={true} />
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 25,
              paddingTop: 20
            }}>
            <View style={{
              paddingLeft: 25,
              paddingRight: 25
            }}>
              <SpecialEventCard
                image={pvpTalk}
                title={'PVP Talk'}
                subtitle={'Auditorium'}
                time={`10.30am to\n11.30am`}
              />
              <ThemeContext.Consumer>
                {theme => <EventCard
                  onPress={() => {
                    this.props.navigation.navigate("Anniversary")
                  }}
                >
                  <View style={{
                    paddingHorizontal: 25,
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: theme.theme === 'light' ? 'rgba(18, 113, 237, 0.24)' : '#0D57CB'
                  }}>
                    <Text category={'h5'} style={{
                      opacity: 0.75,
                      ...Platform.select({
                        android: {
                          fontFamily: 'Raleway 700'
                        },
                        ios: {
                          fontFamily: 'Raleway',
                          fontWeight: '700'
                        }
                      }),
                      lineHeight: 25,
                      marginTop: 20,
                      marginBottom: 20,
                    }}>{`Getting to\nSST`}
                    </Text>
                    <View style={{
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                      <Image source={gettingToSST} style={{
                        resizeMode: 'contain',
                        height: '100%',
                      }}/>
                    </View>
                  </View>
                </EventCard>}
              </ThemeContext.Consumer>
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
            </View>
            <FlatList showsHorizontalScrollIndicator={false} style={{padding: 25}} horizontal={true}
                      data={[{title: 'Essential'}, {title: 'Hands On'}, {title: 'Hands On'}, {title: 'Hands On'}, {title: 'Hands On'}, {title: 'Hands On'}, {title: 'Hands On'}, {title: 'Hands On'}]}
                      keyExtractor={(item, index) => index.toString()} renderItem={({item}) => {
              return (
                <CategoryCard title={item.title} icon={'facebook'}
                              onPress={() => {
                                this.props.navigation.navigate("CategoryEvents", {selectedCategory: item.title})
                              }}/>
              )
            }}/>
            <Layout level={'4'} style={{padding: 25}}>
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
                  marginBottom: 20,
                }}>
                Upcoming Events
              </Header>
              {[1,1,1,1,1].map(() => {
                return (
                  <View style={{
                    marginBottom: 15
                  }}>
                    <DetailCard title='PVP Talk' duration={'10m'} likes={'10'} upNext={'1400'} onPress={() => {}}/>
                  </View>
                )
              })}
            </Layout>
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

export default HomePage;
