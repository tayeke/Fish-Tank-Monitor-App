import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import CurrentTemp from './CurrentTemp.js';
import CurrentTest from './CurrentTest.js';
import CurrentPh from './CurrentPh.js';
import TemperatureScreen from './TemperatureScreen.js';
import TestScreen from './TestScreen.js';
import PhScreen from './PhScreen.js';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(0, 90, 100, 1)',
    background: '#FFFFFF',
  },
};

function HomeScreen({ navigation }) {
  return (
    <>
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <ImageBackground
          source={Platform.OS === 'web' ? './images/fishes.jpeg' : require('./images/fishes.jpeg')}
          style={styles.headerBackground}>
        <View style={styles.headerTextBackground}>
          <Text style={styles.headerText}>Fish Tank Monitor</Text>
        </View>
        </ImageBackground>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate('Temperatures')} style={styles.sectionContainerContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Temperature</Text>
              <Text style={styles.sectionDescription}>
                View temperature logs
              </Text>
            </View>
            <CurrentTemp style={styles.currentMeasure}></CurrentTemp>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PH')} style={styles.sectionContainerContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>PH</Text>
              <Text style={styles.sectionDescription}>
                View PH data results
              </Text>
            </View>
            <CurrentPh style={styles.currentMeasure}></CurrentPh>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tests')} style={styles.sectionContainerContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Test</Text>
              <Text style={styles.sectionDescription}>
                View test data results
              </Text>
            </View>
            <CurrentTest style={styles.currentMeasure}></CurrentTest>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Temperatures" component={TemperatureScreen} />
        <Stack.Screen name="PH" component={PhScreen} />
        <Stack.Screen name="Tests" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFFFFF',
  },
  sectionContainerContainer: {
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  sectionContainer: {
    alignSelf: 'flex-start',
    flex: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111111',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#111111',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#111111',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '600',
    paddingBottom: 0,
    paddingTop: 0,
    textAlign: 'center',
  },
  headerBackground: {
    width: '100%',
  },
  headerTextBackground: {
    marginTop: 200,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 90, 100, 0.5)',
  },
  currentMeasure: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    flex: 1,
  },
});

export default App;
