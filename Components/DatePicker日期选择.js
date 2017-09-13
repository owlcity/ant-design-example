import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { DatePicker, List } from 'antd-mobile';
import { View } from 'react-native';

export default class Test extends Component {
  render() {
    return (<View style={{ marginTop: 30 }}>
      <List>
        <DatePicker 
          mode="date"
          title="选择日期"
          >
          <List.Item arrow="horizontal">
            选择时间
          </List.Item>
        </DatePicker>
      </List>
    </View>);
  }
}
// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => Test);