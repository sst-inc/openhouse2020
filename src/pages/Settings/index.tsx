import React from 'react';
import {Button, Layout} from '@ui-kitten/components'
import {Platform, SafeAreaView, View} from "react-native";
import {HeaderSmall} from "../../components/Text/HeaderSmall";
import {Header} from "../../components/Text/Header";
import {userLogOut} from "../../functions/user";
import {PageHeader} from '../../components/PageHeader';

class SettingsPage extends React.Component {
  render() {
    return (
      <Layout style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <PageHeader {...this.props} title="Settings" subtitle="" searchTrue={false} />
          <Button onPress={() => {
            userLogOut()
          }}>
            Sign out
          </Button>
        </SafeAreaView>
      </Layout>
    )
  }
}

export default SettingsPage
