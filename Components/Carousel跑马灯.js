// import React, { Component } from 'react';
// import { DatePicker, List } from 'antd-mobile';
import { AppRegistry, View } from 'react-native';
// import { Button } from 'antd-mobile';
// import { Checkbox, Flex } from 'antd-mobile';

import React from 'react';
import {ScrollView,Image } from 'react-native';
import { Badge, WhiteSpace } from 'antd-mobile';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import { Carousel } from 'antd-mobile';

export default class BasicCarouselExample extends React.Component<any, any> {
  onselectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={{ paddingHorizontal: 0 }}>
          <Carousel
            style={styles.wrapper}
            autoplayTimeout={2}
            selectedIndex={2}
            autoplay
            dotStyle={{backgroundColor:"red"}}
            autoplayInterval={4000}
            infinite
            afterChange={this.onselectedIndexChange}
          >
            <View style={[styles.container, { backgroundColor: 'red' }]}>
              <Image source={{uri:'https://img.jylc168.com/Upload/Common/2017-09-08/14b959b1fbb6a2421.jpg'}} style={{width:100,height:100}} />
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.container, , { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View style={[styles.container, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View style={[styles.container, { backgroundColor: 'black' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View style={[styles.container, { backgroundColor: '#ccc' }]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Text>Carousel will adjust height based on content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  } 
});

// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => BasicCarouselExample);