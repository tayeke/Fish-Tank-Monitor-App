import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Measurements from './Measurements.js';

export default class CurrentTest extends Component {

  constructor(props){
    super(props);
    this.state = { test: ''};
  }

  async componentDidMount(){
    let currentTest = await Measurements.getCurrentTest();
    this.setState({
      test: currentTest.measure,
    });
  }

  render() {
    return (
    <View><Text style={styles.textMeasure}>{this.state.test}</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  textMeasure: {
    fontSize: 21,
    color: '#336666',
    fontWeight: '500',
  },
});