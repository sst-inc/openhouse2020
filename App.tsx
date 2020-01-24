import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import codePush from "react-native-code-push";
import LandingPage from "./src/pages/Landing";
import {mapping, light} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {Provider as PaperProvider} from 'react-native-paper';
import HomePage from "./src/pages/Home";
import AppLoading from "./src/pages/AppLoading";
import AnniversaryPage from "./src/pages/Anniversary";
import {createDrawerNavigator} from "react-navigation-drawer";
import Push from 'appcenter-push';
// @ts-ignore
import Notifications, {NotificationsAndroid} from 'react-native-notifications';
import {Platform} from "react-native";
import SettingsPage from "./src/pages/Settings";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage
  },
  Anniversary: {
    screen: AnniversaryPage
  }
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppNavigator
  },
  Settings: {
    screen: SettingsPage
  }
}, {
  drawerPosition: 'right'
})

const AuthNavigator = createStackNavigator({
  Landing: {
    screen: LandingPage,
  },
})

const Switch = createSwitchNavigator({
  AppLoading: AppLoading,
  Auth: AuthNavigator,
  App: DrawerNavigator
}, {
  initialRouteName: 'AppLoading'
})

const AppContainer = createAppContainer(Switch)

class App extends React.Component {
  componentDidMount(): void {
    Push.setListener({
      onPushNotificationReceived: function (pushNotification) {
        let message = pushNotification.message;
        let title = pushNotification.title;

        if (message === null) {
          message = '';
        }

        const Notif = Platform.OS === 'ios' ? Notifications : NotificationsAndroid
        Notif.localNotification({
          title: title,
          body: message,
        });
      }
    }).catch(() => {
      //@ts-ignore
      alert("Error initializing Push Notifications")
    })
  }

  render() {
    return (
      <PaperProvider>
        <ApplicationProvider mapping={mapping} theme={light}>
          <AppContainer/>
        </ApplicationProvider>
      </PaperProvider>
    )
  }
}

export default codePush({checkFrequency: codePush.CheckFrequency.ON_APP_RESUME})(App)
