import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {Layout} from "@ui-kitten/components";
//@ts-ignore
import anniversary10 from '../../../assets/images/anniversary_10.png'

class AnniversaryPage extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Layout style={{
                flex: 1
            }}>
                <SafeAreaView style={{
                    flex: 1,
                }}>
                    <View style={{
                        padding: 25,
                        margin: 25,
                        backgroundColor: 'white', borderRadius: 10
                    }}>
                        <Image source={anniversary10} style={{width: '100%', resizeMode: 'contain'}}/>
                    </View>
                </SafeAreaView>
            </Layout>
        )
    }
}

export default AnniversaryPage
