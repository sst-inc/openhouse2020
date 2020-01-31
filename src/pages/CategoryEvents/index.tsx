import React, {Component} from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View} from "react-native";
import {HeaderSmall} from "../../components/Text/HeaderSmall";
import {ThemeContext} from "../../functions/theme";
import {Header} from "../../components/Text/Header";

class CategoryEventsPage extends Component {
  static navigationOptions = {
    header: null
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
          </View>
        </SafeAreaView>
      </Layout>
    )
  }
}

export default CategoryEventsPage
