import React, { Component } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SwitchNavigator from './Components/Config/Navigation';
import VerifyCode from './screens/VerifyCode/VerifyCode';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {


    return (
      <View style={{ flex: 1 }}>

        {/* <VerifyCode /> */}
        <SwitchNavigator />
      </View>
    );
  }
}

