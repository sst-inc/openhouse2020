import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import codePush from "react-native-code-push";
import LandingPage from "./src/pages/Landing";
import {mapping, light, dark} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {Provider as PaperProvider} from 'react-native-paper';
import HomePage from "./src/pages/Home";
import AppLoading from "./src/pages/AppLoading";
import AnniversaryPage from "./src/pages/Anniversary";
import {createDrawerNavigator} from "react-navigation-drawer";
import Push from 'appcenter-push';
// @ts-ignore
import Notifications, {NotificationsAndroid} from 'react-native-notifications';
import {Platform} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import SettingsPage from "./src/pages/Settings";
//@ts-ignore
import customTheme from './assets/theme/custom-theme.json'
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Text} from "@ui-kitten/components";
import {GLOBAL} from "./database/global";
//@ts-ignore
import customMapping from './assets/theme/custom-mapping.json'

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

export interface AppState {
  dark: boolean;
}

class App extends React.Component<{}, AppState> {
  state = {
    dark: false
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<AppState>, snapshot?: any): void {
    if (prevState.dark !== this.state.dark) {
      AsyncStorage.setItem("theme", this.state.dark ? "dark" : 'light')
    }
  }

  componentDidMount(): void {
    AsyncStorage.getItem("theme").then((theme) => {
      if (theme) {
        this.setState({dark: theme === 'dark'})
      }
    })
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
    GLOBAL.app = this
    return (
      <PaperProvider>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider mapping={mapping}
                             customMapping={customMapping}
                             theme={{...customTheme, ...this.state.dark ? dark : light}}>
          <AppContainer/>
        </ApplicationProvider>
      </PaperProvider>
    )
  }
}

export default codePush({checkFrequency: codePush.CheckFrequency.ON_APP_RESUME})(App)
