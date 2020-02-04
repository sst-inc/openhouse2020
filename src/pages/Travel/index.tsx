import React from 'react';
import {NavigationInjectedProps} from "react-navigation";
import {SafeAreaView, View} from "react-native";
import {Layout} from "@ui-kitten/components";
import PageHeader from "../../components/PageHeader";

class TravelPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Layout style={{
        flex: 1
      }}>
        <SafeAreaView style={{
          flex: 1
        }}>
          <View style={{
            paddingHorizontal: 25
          }}>
            <PageHeader navOption={"back"} subtitle={'commute'} title={"Getting to SST"} navigation={this.props.navigation}/>
          </View>
        </SafeAreaView>
      </Layout>
    )
  }
}

export default TravelPage
