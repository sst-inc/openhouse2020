import React, {Component} from 'react';
import {Layout} from "@ui-kitten/components";
import {ThemedIcon} from "../../components/Icon/ThemedIcon";
import {SafeAreaView, TouchableOpacity, View} from "react-native";
import {NavigationInjectedProps} from "react-navigation";
import {Input} from "@ui-kitten/components";

interface SearchPageState {
  input: string
}

class SearchPage extends Component<NavigationInjectedProps, SearchPageState> {
  static navigationOptions = {
    header: null,
  };
  state = {
    input: ''
  }

  render() {
    return (
      <Layout style={{
        flex: 1,
      }}>
        <SafeAreaView style={{
          flex: 1,
        }}>
          <View style={{
            paddingHorizontal: 25,
            paddingVertical: 15
          }}>
            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <ThemedIcon name={'arrow-back'} size={30}/>
              </TouchableOpacity>
              <View style={{
                flex: 1,
                marginHorizontal: 15
              }}>
                <Input placeholder={'Search...'} style={{marginTop: 4}} size={'large'}  textStyle={{color: 'gray'}} value={this.state.input} onChangeText={(input) => this.setState({input})}/>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Layout>
    )
  }
}

export default SearchPage
