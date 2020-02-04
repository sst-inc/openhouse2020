import React, {Component} from 'react';
import {Layout, Spinner} from "@ui-kitten/components";
import {SafeAreaView} from "react-native";

class EventDetailsPage extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Layout style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Spinner size={'giant'}/>
        </SafeAreaView>
      </Layout>
    )
  }
}

export default EventDetailsPage
