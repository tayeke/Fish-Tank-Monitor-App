import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Measurements from './Measurements.js';

export default class CurrentTemp extends Component {

  constructor(props){
    super(props);
    this.state = { temperature: ''};
  }

  async componentDidMount(){
    let currentTemperature = await Measurements.getCurrentTemperature();
    console.log(currentTemperature);
    this.setState({
      temperature: currentTemperature.measure,
    });
  }

  render() {
    return (
        <View><Text style={styles.textMeasure}>{this.state.temperature}F</Text></View>
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