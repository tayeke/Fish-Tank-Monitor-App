import React, { Component } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import Moment from 'moment';

import Measurements from './Measurements.js';

export default class TestScreen extends Component {

  constructor(props){
    super(props);
    this.state = { tests: []};
  }

  async componentDidMount(){
    let tests = await Measurements.getTests();
    this.setState({
      tests: tests.reverse(),
    });
  }

  render() {

    let tests = [];
    for(let i = 0; i < this.state.tests.length; i++){
      tests.push(
        <View style={styles.testListItem} key = {i}>
          <View style={styles.measure}>
            <Text style={styles.measureText}>{this.state.tests[i].measure}</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.dateText}>{Moment(this.state.tests[i].created_at).format('d MMM h:mm')}</Text>
          </View>
        </View>
      )
    }
    return (
      <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <ImageBackground source={require('./images/fishes2.jpg')} style={styles.headerBackground}>
            <View style={styles.headerTextBackground}>
              <Text style={styles.headerText}>Fish Tank Monitor</Text>
            </View>
            </ImageBackground>
          <View style={styles.body}>
            {tests}
          </View>
        </ScrollView>
      </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
  },
  headerTextBackground: {
    marginTop: 200,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 90, 100, 0)',
    color: 'rgba(0, 90, 100, 0)',
  },
  testListItem: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.25)',
    paddingVertical: 12,
    paddingLeft: 50,
    paddingRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    width: '100%',
  },
  date: {
    alignSelf: 'flex-end',
    flex: 1,
  },
  dateText: {
    fontSize: 18,
    textAlign: 'right',
  },
  measure: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    flex: 1,
  },
  measureText: {
    fontSize: 24,
    fontWeight: '500',
  },
});