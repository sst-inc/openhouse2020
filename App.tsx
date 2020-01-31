import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import codePush from "react-native-code-push";
import LandingPage from "./src/pages/Landing";
import {mapping, light, dark} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Drawer, Layout, Icon} from '@ui-kitten/components';
import {Provider as PaperProvider} from 'react-native-paper';
import HomePage from "./src/pages/Home";
import CreditsPage from "./src/pages/Credits";
import AppLoading from "./src/pages/AppLoading";
import AnniversaryPage from "./src/pages/Anniversary";
import {createDrawerNavigator} from "react-navigation-drawer";
import Push from 'appcenter-push';
// @ts-ignore
import Notifications, {NotificationsAndroid} from 'react-native-notifications';
import {Platform, SafeAreaView} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import SettingsPage from "./src/pages/Settings";
//@ts-ignore
import customTheme from './assets/theme/custom-theme.json'
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Text} from "@ui-kitten/components";
//@ts-ignore
import customMapping from './assets/theme/custom-mapping.json'
import {ThemeContext} from "./src/functions/theme";
import {ThemedIcon} from "./src/components/Icon/ThemedIcon";

const drawerData: { title: string; icon: any }[] = [
  {
    title: "Home",
    icon: () => (<ThemedIcon name={'home-outline'} size={20} style={{marginRight: 15}}/>)
  },
  {
    title: "Settings",
    icon: () => (<ThemedIcon name={'settings-2-outline'} size={20} style={{marginRight: 15}}/>)
  },
  {
    title: "Credits",
    icon: () => (<ThemedIcon name={'settings-2-outline'} size={20} style={{marginRight: 15}}/>)
  },
]

const DrawerComponent = ({navigation}: any) => {
  const onSelect = (index: any) => {
    const route = drawerData[index];
    navigation.navigate(route.title);
  };

  return (
    <Layout style={{flex: 1}}>
      <SafeAreaView>
        <Drawer data={drawerData} onSelect={onSelect}/>
      </SafeAreaView>
    </Layout>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage
  },
  Anniversary: {
    screen: AnniversaryPage
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppNavigator
  },
  Settings: {
    screen: SettingsPage
  },
  Credits: {
    screen: CreditsPage
  },
}, {
  drawerPosition: 'right',
  contentComponent: DrawerComponent
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
  theme: 'light' | 'dark'
}

const themes = {light, dark}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: 'light'
    }
  }

  componentWillMount(): void {
    AsyncStorage.getItem("theme").then((theme) => {
      if (theme === 'light' || theme === 'dark') {
        this.setState({theme})
      }
    })
  }

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

  _toggleTheme() {
    const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';
    AsyncStorage.setItem('theme', nextTheme).then(() => {
      this.setState({theme: nextTheme})
    })
  }

  render() {
    const currentTheme = themes[this.state.theme]
    return (
      <PaperProvider>
        <IconRegistry icons={EvaIconsPack}/>
        <ThemeContext.Provider value={{
          theme: this.state.theme, toggleTheme: () => {
            this._toggleTheme()
          }
        }}>
          <ApplicationProvider mapping={mapping}
                               customMapping={customMapping}
                               theme={{...currentTheme, ...customTheme}}>
            <AppContainer/>
          </ApplicationProvider>
        </ThemeContext.Provider>
      </PaperProvider>
    )
  }
}

export default codePush({checkFrequency: codePush.CheckFrequency.ON_APP_RESUME})(App)
