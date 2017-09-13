import React from 'react';
import {AppRegistry} from 'react-native';
import { View, Text } from 'react-native'
import { Picker, List, WhiteSpace } from 'antd-mobile'

//样式问题，为组件库问题等待发布新版本

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
]

class PickerExample extends React.Component {
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['2013', '春'],
  };

  render() {
    return (
      <View>
        <WhiteSpace size='lg' />
        <List style={{ backgroundColor: 'white' }} className='picker-list'>
          <Picker

            data={seasons}
            title='选择季节'
            cascade={false}
            extra='请选择(可选)'
            value={this.state.sValue}
            onChange={v => this.setState({ sValue: v })}
          >
            <List.Item arrow='horizontal'>选择季节（多列，不联动）</List.Item>
          </Picker>
        </List>
      </View>)
  }
}
// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => PickerExample);