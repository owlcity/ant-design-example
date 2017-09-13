import React from 'react';
import {AppRegistry} from 'react-native';
import { ImagePicker, WhiteSpace } from 'antd-mobile';
import { View,Text } from 'react-native';

// 暂不支持图片上传,图片上传需要自己实现
export default class ImagePickerExample extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      files: [{
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
        id: '2122',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
        id: '2123',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
        id: '2124',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
        id: '2125',
      }],
      files2: [],
    };
  }

  handleFileChange = (files) => {
    this.setState({
      files,
    });
  }

  handleFile2Change = (files2) => {
    this.setState({
      files2
    });
  }

  render() {
    return (
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <ImagePicker
          onChange={this.handleFileChange}
          files={this.state.files}
        />
        <View><Text>-------</Text></View>
        <WhiteSpace />
        <ImagePicker
          onChange={this.handleFile2Change}
          files={this.state.files2}

        />
      </View>
    );
  }
}
// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => ImagePickerExample);