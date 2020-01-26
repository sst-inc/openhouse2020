import React from 'react';
import {Spinner, Layout} from '@ui-kitten/components'
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
            <Layout style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}>
                <Spinner size={'giant'}/>
            </Layout>
        )
    }
}

export default AppLoading
