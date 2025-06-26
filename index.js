/**
 * @format
 */

import {AppRegistry, I18nManager} from 'react-native';
import * as React from 'react';
import {name as appName} from './app.json';
import Routes from './src/routes';
I18nManager.forceRTL(true);
AppRegistry.registerComponent(appName, () => Routes);
