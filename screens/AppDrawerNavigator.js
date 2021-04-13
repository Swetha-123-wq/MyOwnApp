import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from '../components/CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import {Icon} from 'react-native-elements';
export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  },
  MelodySongs : {
    screen : MyMelodyScreen
  },
  FastBeatsongs : {
    screen : fastBeatSongs
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
