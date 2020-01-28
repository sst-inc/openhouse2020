import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';

export const EventCatCard = (props: {
  title: string;
  icon: string; //icon name from @ui-kitten/eva-icons module
  onPress(): void;
}) => {
  return (
    <Layout style={{}}>
      <TouchableOpacity
        onPress={() => {
          if (props.onPress) {
            props.onPress();
          }
        }}>
        <Layout
          style={{
            ...Platform.select({
              ios: {
                elevation: 10,
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.16,
                shadowRadius: 10,
              },
            }),
            width: 130,
            marginTop: 15,
            marginRight: 25,
            borderRadius: 5
          }}>
          <Layout
            style={{
              paddingVertical: 60,
              alignContent: 'center',
              justifyContent: 'center',
            }}>  
            <Icon
              name={props.icon}
              width={32}
              height={32}
              fill="#000"
              style={{
                marginBottom: 15,
                left: '35%'
              }} />
            <Text
              style={{
                fontFamily: 'Raleway',
                fontWeight: '600',
                fontSize: 20,
                textAlign: 'center',
              }}>
              {props.title}
            </Text>
          </Layout>
        </Layout>
      </TouchableOpacity>
    </Layout>
  );
};
