import { BASIC_AUTH_TOKEN } from 'react-native-dotenv'

class Measurements {

  static async getTemperatures() {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + BASIC_AUTH_TOKEN);
    try {
      let response = await fetch('https://fish-tank-monitor.herokuapp.com/temperatures.json', {headers: headers});
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  static async getCurrentTemperature() {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + BASIC_AUTH_TOKEN);
    try {
      let response = await fetch('https://fish-tank-monitor.herokuapp.com/temperatures/current.json', {headers: headers});
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  static async getTests() {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + BASIC_AUTH_TOKEN);
    try {
      let response = await fetch('https://fish-tank-monitor.herokuapp.com/tests.json', {headers: headers});
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  static async getCurrentTest() {
    let headers = new Headers();
    headers.append("Authorization", "Basic " + BASIC_AUTH_TOKEN);
    try {
      let response = await fetch('https://fish-tank-monitor.herokuapp.com/tests/current.json', {headers: headers});
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Measurements;

