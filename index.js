/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './modules/home/Home';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import Routes from './routes/Routes';
import Register from './modules/register/Register';

AppRegistry.registerComponent(appName, () => Routes);
