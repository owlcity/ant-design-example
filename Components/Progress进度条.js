import React from 'react';
import {AppRegistry} from 'react-native';
import { View, Text, ViewStyle,StyleSheet } from 'react-native';
import { WhiteSpace, Button, Progress } from 'antd-mobile';

// 官方提供demo有问题，需要修改

export default class BasicProgressExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      percent: 40,
    };
  }

  onAdd = () => {
    let p = this.state.percent + 10;
    if (this.state.percent >= 100) {
      p = 0;
    }
    this.setState({ percent: p });
  }

  render() {
    const style = {
      marginTop: 80,
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    };
    return (
      <View style={{paddingTop:100}}>
        <Progress percent={90} position="fixed" />

        <View>

          <View style={styles.outerStyle}>
          <Progress style={{position:"absolute",top:0,left:0,backgroundColor:"#F00", marginRight: 10, height: 4, flex: 1 }} percent={this.state.percent} />
          </View>
          <Text>{this.state.percent}%</Text>

        </View>
        <Button style={{ width: 50, marginLeft: 10 }} type="ghost" size="small" onClick={this.onAdd}>(+-)10</Button>

        <WhiteSpace/>
        <Progress percent={50} />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerStyle: {
    width : 370,
    height : 4,
    backgroundColor:"#ccc",
    position : "relative"
  }
})
// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => BasicProgressExample);