/**
 * IMPORTANT: To use Icon component make sure to follow this guide:
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/eva-icons
 */

import React from 'react';
import {
  Icon,
  Tab,
} from 'react-native-ui-kitten';

const DashboardIcon = (style) => (
  <Icon {...style} name='layout'/>
);

export const TabWithIconShowcase = (props) => (
  <Tab title='DASHBOARD' icon={DashboardIcon}/>
);
