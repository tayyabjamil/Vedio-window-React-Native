import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    // AsyncStorage.removeItem('rememberLogin')
   
  }

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}
