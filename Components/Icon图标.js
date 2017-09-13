import React from 'react';
import {AppRegistry} from 'react-native';
import { Icon, Grid } from 'antd-mobile';

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis','loading',
];
// 如何使用icon字体
// 添加字体时会报错，Unrecognized font family 'anticon'是因为xcode中添加的icon未与醒目关联，所以需要选中target membership关联即可
// https://mobile.ant.design/components/icon
// https://github.com/ant-design/ant-design-mobile/issues/1027#issuecomment-289643922
// 多看官方文档
export default class IConDemo extends React.Component<any, any> {
  render() {
    const data = icons.map(item => ({
      icon: (<Icon type={item} />),
      text: item,
    })).concat([{
      icon: (<Icon type={'\ue601'} size={55} color="red" />),
      text: 'Customized',
    }]);
    return (
      <Grid data={data} columnNum={3} hasLine={false} />
    );
  }
}
// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => IConDemo);