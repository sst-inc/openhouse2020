import React from 'react';
import {Platform} from 'react-native'
import {Text, Layout} from "@ui-kitten/components";

import {TouchableShadow} from "../../Shadow/Touchable";

export function PrimaryButton(props: {title: string, onPress?(): void}) {
    return (
        <TouchableShadow>
            <Layout style={{
                borderRadius: 18,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
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
        </TouchableShadow>
    )
}
