import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {Image, Platform, Text, View} from "react-native";
import {Subtitle} from "../../Text/Subtitle";
import {PrimaryButton} from "../../Button/Primary";

export function SpecialEventCard(props: {image?: any; title: string; subtitle?: string; time: string}) {
    return (
        <View style={{
            width: '100%',
            borderRadius: 5,
            elevation: 10,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.16,
            shadowRadius: 10,
            backgroundColor: 'white',
        }}>
            <LinearGradient angle={135} useAngle={true} colors={["#E60233", "#A70024"]}
                            style={{flex: 1, padding: 20, flexDirection: 'row', borderRadius: 5, overflow: 'hidden'}}>
                <View style={{flex: 1}}>
                    <Text style={{
                        ...Platform.select({
                            ios: {
                                fontWeight: '700',
                                fontFamily: 'Raleway'
                            },
                            android: {
                                fontWeight: undefined,
                                fontFamily: 'Raleway 700'
                            },
                        }),
                        color: 'white',
                        fontSize: 25
                    }}>
                        {props.title}
                    </Text>
                    <Subtitle style={{
                        ...Platform.select({
                            ios: {
                                fontWeight: '700',
                                fontFamily: 'Raleway'
                            },
                            android: {
                                fontWeight: undefined,
                                fontFamily: 'Raleway 700'
                            },
                        }),
                    }}>
                        {props.subtitle}
                    </Subtitle>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <Subtitle style={{
                            ...Platform.select({
                                ios: {
                                    fontWeight: '700',
                                    fontFamily: 'Raleway'
                                },
                                android: {
                                    fontWeight: undefined,
                                    fontFamily: 'Raleway 700'
                                },
                            }),
                            opacity: 1,
                            marginTop: 25, marginBottom: 25
                        }}>{props.time}</Subtitle>
                    </View>
                    <PrimaryButton title={"Set a reminder"}/>
                </View>
                <View style={{flex: 1}}>
                    <Image style={{
                        height: '100%',
                        resizeMode: 'contain',
                        width: '100%'
                    }} source={props.image}/>
                </View>
            </LinearGradient>
        </View>
    )
}
