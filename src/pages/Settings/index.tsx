import React from 'react';
import {Button, Layout} from '@ui-kitten/components'
import {Platform, SafeAreaView, View} from "react-native";
import {userLogOut} from "../../functions/user";
import {PageHeader} from '../../components/PageHeader';
import { ThemeContext } from '../../functions/theme';
import { NavigationInjectedProps } from 'react-navigation';

class SettingsPage extends React.Component<NavigationInjectedProps> {
  render() {
    return (
      <Layout style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{paddingHorizontal: 25}}>
          <PageHeader navigation={this.props.navigation} title="Settings" navOption={'menu'} />
          </View>
          <Button onPress={() => {
            userLogOut()
          }}>
            Sign out
          </Button>
          <ThemeContext.Consumer>{theme =>
          <Button onPress={() => theme.toggleTheme()}>
            theme
            </Button>
          }</ThemeContext.Consumer>
        </SafeAreaView>
      </Layout>
    )
  }
}

export default SettingsPage
