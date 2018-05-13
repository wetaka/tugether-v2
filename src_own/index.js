import { Navigation } from 'react-native-navigation'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login'
import Category from './src/pages/Category'
import Description from './src/pages/Description'
import Joined from './src/pages/Joined'
import CreateEvent from './src/pages/CreateEvent'
import Home from './src/pages/Home'
import Main from './src/pages/Main'
import MasonryPage from './src/pages/MasonryPage'
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import UserSetting from './src/pages/UserSetting';
import Notificate from './src/pages/Notificate';
import UpdateEvent from './src/pages/UpdateEvent';
// import Splash from './screens/splash'
// import Screen1 from './screens/screen1'
// import Screen2 from './screens/screen2'
// import Screen3 from './screens/screen3'
// import modalScreen from './screens/modalScreen'

// export default () => {
//   Navigation.registerComponent('Splash', () => Splash);
//   Navigation.registerComponent('Screen1', () => Screen1);
//   Navigation.registerComponent('Screen2', () => Screen2);
//   Navigation.registerComponent('Screen3', () => Screen3);
//   Navigation.registerComponent('modalScreen', () => modalScreen);

//   Navigation.startSingleScreenApp({
//     screen:{
//       screen: 'Splash',
//       navigatorStyle: {},
//       navigatorButtons: {}
//     }
//   })
// }
export default () => {

  Navigation.registerComponent('UserSetting', () => UserSetting);
  Navigation.registerComponent('Main', () => Main);
  Navigation.registerComponent('UpdateEvent', () => UpdateEvent);
  Navigation.registerComponent('CreateEvent', () => CreateEvent);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Notificate', () => Notificate);
  Navigation.registerComponent('Description', () => Description);
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('Category', () => Category);
  Navigation.registerComponent('Joined', () => Joined);
  Navigation.registerComponent('MasonryPage', () => MasonryPage);
  // Navigation.registerComponent('Splash', () => Splash);
  // Navigation.registerComponent('Splash', () => Splash);

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Splash',
      navigatorStyle: {},
      navigatorButtons: {}
    }
  })
}





// const Navigator = FluidNavigator({
//   UserSetting: { screen: UserSetting },
//   Main: { screen: Main },
//   UpdateEvent: { screen: UpdateEvent },
//   CreateEvent: { screen: CreateEvent },
//   Home: { screen: Home },
//   Notificate: { screen: Notificate },
//   Description: { screen: Description },
//   Login: { screen: Login },
//   Category: { screen: Category },
//   Joined: { screen: Joined },
//   MasonryPage: { screen: MasonryPage },
// })

// export default () => (
//   <Navigator />
// );