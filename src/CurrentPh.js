import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Measurements from './Measurements.js';

export default class CurrentPh extends Component {

  constructor(props){
    super(props);
    this.state = { ph: ''};
  }

  async componentDidMount() {
    let currentPh = await Measurements.getCurrentPh();
    console.log(currentPh);
    this.setState({
      ph: currentPh.measure,
    });
  }

  render() {
    return (
        <View><Text style={styles.phMeasure}>{this.state.ph}</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  phMeasure: {
    fontSize: 21,
    color: '#336666',
    fontWeight: '500',
  },
});