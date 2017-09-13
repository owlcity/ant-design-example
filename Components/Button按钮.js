import React from 'react';
import {AppRegistry} from 'react-native';

/* tslint:enable:no-unused-variable */
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Test extends React.Component<any, any> {
  render() {
    return (
      <WingBlank>
    <WhiteSpace />
    <Button>default</Button><WhiteSpace />
    <Button disabled>default disabled</Button><WhiteSpace />

    <Button type="primary">primary</Button><WhiteSpace />
    <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

    <Button type="warning">warning</Button><WhiteSpace />
    <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

    <Button loading>loading button</Button>

    {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
    {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

    <WingBlank style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>ghost disabled</Button>
      <Button type="ghost" size="small">ghost</Button>
    </WingBlank>
  </WingBlank>
    );
  }
}
// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => Test);