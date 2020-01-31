import React, {Component} from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View} from "react-native";
import {HeaderSmall} from "../../components/Text/HeaderSmall";
import {ThemeContext} from "../../functions/theme";
import {Header} from "../../components/Text/Header";
import {ThemedIcon} from "../../components/Icon/ThemedIcon";
import {NavigationInjectedProps} from "react-navigation";
import PageHeader from "../../components/PageHeader";

interface CategoryEventsPageState {
  selectedCategory: string;
}

class CategoryEventsPage extends Component<NavigationInjectedProps, CategoryEventsPageState> {
  static navigationOptions = {
    header: null
  }
  state = {
    selectedCategory: ''
  }

  componentDidMount(): void {
    const selected = this.props.navigation.getParam("selectedCategory")
    if (!this.props.navigation.getParam("selectedCategory")) {
      this.props.navigation.goBack()
      return
    }
    this.setState({selectedCategory: selected})
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
          <View style={{
            paddingHorizontal: 25
          }}>
            <PageHeader subtitle={'categories'} navOption={'back'} title={this.props.navigation.getParam("selectedCategory")} navigation={this.props.navigation}/>
          </View>
        </SafeAreaView>
      </Layout>
    )
  }
}

export default CategoryEventsPage
