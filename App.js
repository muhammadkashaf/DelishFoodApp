import React, { Component } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/Components/screens/Routes/Navigation';


import { Provider } from 'react-redux';
import store from './src/Components/Config/store/index';



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
      <Provider store={store}>

        <View style={{ flex: 1 }}>
          <Routes />
        </View>

      </Provider >
    );
  }
}

