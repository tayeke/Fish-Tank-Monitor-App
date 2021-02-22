/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
    // Mount the react-native app in the "root" div of index.html
    rootTag: document.getElementById('root'),
});
