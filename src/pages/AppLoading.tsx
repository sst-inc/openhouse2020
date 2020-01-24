import React from 'react';
import {View} from 'react-native';
import {Spinner} from 'react-native-ui-kitten'
import {checkUserLoggedIn} from "../functions/user";
import {NavigationInjectedProps} from "react-navigation";

class AppLoading extends React.Component<NavigationInjectedProps<any>> {
    componentDidMount(): void {
        checkUserLoggedIn().then((login) => {
            if (login) {
                this.props.navigation.navigate("App")
                return
            }
            this.props.navigation.navigate("Auth")
        })
    }

    render() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}>
                <Spinner size={'giant'}/>
            </View>
        )
    }
}

export default AppLoading
