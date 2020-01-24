import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
//@ts-ignore
import anniversary10 from '../../../assets/images/anniversary_10.png'

class AnniversaryPage extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <SafeAreaView style={{
                    flex: 1
                }}>
                    <Image source={anniversary10} style={{width: '100%', resizeMode: 'contain'}}/>
                </SafeAreaView>
            </View>
        )
    }
}

export default AnniversaryPage
