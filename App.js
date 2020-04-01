import React, { Component } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SwitchNavigator from './src/Components/screens/Routes/Navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    
    SplashScreen.hide();
  }

  render() {


    return (
      <View style={{ flex: 1 }}>

        <SwitchNavigator />
      </View>
    );
  }
}

