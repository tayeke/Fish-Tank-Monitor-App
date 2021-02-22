import React, { Component } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Platform,
} from 'react-native';

import Moment from 'moment';

import Measurements from './Measurements.js';

export default class PhScreen extends Component {

  constructor(props){
    super(props);
    this.state = { ph: []};
  }

  async componentDidMount(){
    let ph = await Measurements.getPh();
    this.setState({
      ph: ph,
    });
  }

  render() {

    let ph = [];
    for(let i = 0; i < this.state.ph.length; i++){
      ph.push(
        <View style={styles.phListItem} key = {i}>
          <View style={styles.measure}>
            <Text style={styles.measureText}>{this.state.ph[i].measure}</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.dateText}>{Moment(this.state.ph[i].created_at).format('dd D MMM h:mm')}</Text>
          </View>
        </View>
      )
    }
    return (
      <>
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <ImageBackground
            source={Platform.OS === 'web' ? '/images/fishes3.jpg' : require('./images/fishes3.jpg')}
            style={styles.headerBackground}>
            <View style={styles.headerTextBackground}>
              <Text style={styles.headerText}></Text>
            </View>
            </ImageBackground>
          <View style={styles.body}>
            {ph}
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
  phListItem: {
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