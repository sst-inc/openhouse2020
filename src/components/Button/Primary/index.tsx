import React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native'
import {Text, Layout} from "@ui-kitten/components";

export function PrimaryButton(props: {title: string, onPress?(): void}) {
    return (
        <TouchableOpacity style={{
            ...Platform.select({
                ios: {
                    elevation: 10,
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.16,
                    shadowRadius: 10,
                }
            })
        }}>
            <Layout style={{
                borderRadius: 18,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
                ...Platform.select({
                    android: {
                        elevation: 10,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.16,
                        shadowRadius: 10,
                    }
                })
            }}>
                <Text style={{
                    ...Platform.select({
                        ios: {
                            fontWeight: '600',
                            fontFamily: 'IBM Plex Sans'
                        },
                        android: {
                            fontWeight: undefined,
                            fontFamily: 'IBMPlexSans-Medium'
                        },
                    }),
                    opacity: 0.75
                }} category={'p1'}>
                    {props.title}
                </Text>
            </Layout>
        </TouchableOpacity>
    )
}
