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

export default class TemperatureScreen extends Component {

  constructor(props){
    super(props);
    this.state = { temperatures: []};
  }

  async componentDidMount(){
    let temperatures = await Measurements.getTemperatures();
    this.setState({
      temperatures: temperatures,
    });
  }

  render() {

    let temps = [];
    for(let i = 0; i < this.state.temperatures.length; i++){
      temps.push(
        <View style={styles.tempListItem} key = {i}>
          <View style={styles.measure}>
            <Text style={styles.measureText}>{this.state.temperatures[i].measure}F</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.dateText}>{Moment(this.state.temperatures[i].created_at).format('dd D MMM h:mm')}</Text>
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
              <Text style={styles.headerText}></Text>
            </View>
            </ImageBackground>
          <View style={styles.body}>
            {temps}
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
  tempListItem: {
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