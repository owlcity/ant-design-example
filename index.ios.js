import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, TabBar, Tabs} from 'antd-mobile';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  onPress(selectedTab) {
    this.setState({
      selectedTab
    })
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="基础"
          key="基础"
          icon={require('./Components/img/alipay@3x.png')}
          selectedIcon={require('./Components/img/alipay_sel@3x.png')}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={this.onPress.bind(this, 'blueTab')}
        >
          <View style={styles.container}>
            <Text>基础</Text>
          </View>
        </TabBar.Item>
        <TabBar.Item
          title="导航"
          key="导航"
          icon={require('./Components/img/koubei@3x.png')}
          selectedIcon={require('./Components/img/koubei_sel@3x.png')}
          selected={this.state.selectedTab === 'redTab'}
          onPress={this.onPress.bind(this, 'redTab')}
        >
          <View style={styles.container}>
            <Text>导航</Text>
          </View>
        </TabBar.Item>
        <TabBar.Item
          title="展示"
          key="展示"
          icon={require('./Components/img/friend@3x.png')}
          selectedIcon={require('./Components/img/friend_sel@3x.png')}
          selected={this.state.selectedTab === 'greenTab'}
          onPress={this.onPress.bind(this, 'greenTab')}
        >
          <View style={styles.container}><Text>展示</Text></View>
        </TabBar.Item>
        <TabBar.Item
          title="其它"
          key="其它"
          icon={require('./Components/img/busi@3x.png')}
          selectedIcon={require('./Components/img/busi_sel@3x.png')}
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={this.onPress.bind(this, 'yellowTab')}
        >
          <View style={styles.container}><Text>其它</Text></View>
        </TabBar.Item>
      </TabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
  },
});
// change xxxxx to your project name
AppRegistry.registerComponent('Ant', () => Test);