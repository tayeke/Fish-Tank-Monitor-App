class Measurements {

  static async getTemperatures() {
    try {
      let response = await fetch('https://fish-tank-monitor.herokuapp.com/temperatures.json');
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  static async getCurrentTemperature() {
    let temperatures = await this.getTemperatures();
    return temperatures[temperatures.length-1];
  }

  static async getTests() {
    try {
      let response = await fetch('https://fish-tank-monitor.herokuapp.com/tests.json');
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  static async getCurrentTest() {
    let tests = await this.getTests();
    return tests[tests.length-1];
  }
}

export default Measurements;

