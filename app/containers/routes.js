import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// Group
import Group from './Group';
import ChosenGroup from './ChosenGroup';
import Orders from './Orders';
import JoinGroup from './JoinGroup';
// Add Order
import AddOrder from './AddOrder';
import SelectGroup from './AddOrder/components/SelectGroup';
import SetOrderName from './AddOrder/components/SetOrderName';
import SetPrice from './AddOrder/components/SetPrice';
import SelectMembers from './AddOrder/components/SelectMembers';
// Me
import Me from './Me';
// Styles
import { themeColor } from '../style';

const GroupTab = StackNavigator({
  Group: {
    screen: Group,
  },
  ChosenGroup: {
    screen: ChosenGroup,
  },
  Orders: {
    screen: Orders,
  },
  JoinGroup: {
    screen: JoinGroup,
  },
});

const AddOrderTab = StackNavigator({
  AddOrder: {
    screen: AddOrder,
  },
  SelectGroup: {
    screen: SelectGroup,
  },
  SetOrderName: {
    screen: SetOrderName,
  },
  SetPrice: {
    screen: SetPrice,
  },
  SelectMembers: {
    screen: SelectMembers,
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
      tabBarIcon: ({ focused }) => tabBarIcon(focused, 'comment'),
    },
  },
  AddOrderTab: {
    screen: AddOrderTab,
    navigationOptions: {
      tabBarLabel: 'New Purchase',
      tabBarIcon: ({ focused }) => tabBarIcon(focused, 'plus'),
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