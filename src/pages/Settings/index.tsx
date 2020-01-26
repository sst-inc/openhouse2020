import React from 'react';
import {Button, Text} from '@ui-kitten/components'
import {Platform, SafeAreaView, View} from "react-native";
import {HeaderSmall} from "../../components/Text/HeaderSmall";
import {Header} from "../../components/Text/Header";
import {userLogOut} from "../../functions/user";

class SettingsPage extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{paddingLeft: 25, paddingRight: 25, paddingTop: 10}}>
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
              Settings
            </Header>
          </View>
          <Button onPress={() => {
            userLogOut()
          }}>
            Sign out
          </Button>
        </SafeAreaView>
      </View>
    )
  }
}

export default SettingsPage
