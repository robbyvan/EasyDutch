import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Group
import Group from './Group';
// Me
import Me from './Me';
// Styles
import { themeColor } from '../style';

const GroupTab = StackNavigator({
  Group: {
    screen: Group,
  },
});

const MeTab = StackNavigator({
  Me: {
    screen: Me,
  },
});

const tabBarIcon = (focused, iconName) => (
  <EvilIcons
    name={iconName}
    color={focused ? themeColor : '#333'}
    size={30}
  />
);

const Tabs = TabNavigator({
  GroupTab: {
    screen: GroupTab,
    navigationOptions: {
      tabBarLabel: 'Groups',
      tabBarIcon: ({ focused }) => tabBarIcon(focused, 'navicon'),
    },
  },
  MeTab: {
    screen: MeTab,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ focused }) => tabBarIcon(focused, 'user'),
    },
  }
}, {
  tabBarOptions: {
    activeTintColor: themeColor,
  }
});

export default Tabs;