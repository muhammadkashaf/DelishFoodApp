import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Icon } from 'native-base';

import { orange } from '../../ColorTheme/color';







class Delishpay extends Component {

  static navigationOptions = {
    drawerLabel: () => null,
  };

  

  render() {
    return (

      <View style={{ flex: 1, }}>

        <ScrollView>
          <View style={{ backgroundColor: 'black', height: '30%', }}>
            <ImageBackground style={{ resizeMode: 'cover', width: '100%' }} source={require('../../../../Assets/Images/box.png')} >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25 }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Icon name='md-arrow-back' type='Ionicons' style={{ color: 'white', fontSize: 35, paddingLeft: '5%', }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'white', paddingRight: '40%', fontWeight: 'bold' }}>Delishpay</Text>
              </View>

              <View style={{ justifyContent: 'center', backgroundColor: 'white', width: "90%", alignSelf: 'center', paddingLeft: '10%', borderRadius: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                <Text style={{ fontSize: 35, color: 'gray' }}>Balance</Text>
                <Text style={{ fontSize: 30, color: 'black', paddingLeft: '4%', }}>Rs.00</Text>
              </View>

            </ImageBackground>

          </View>


          <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: '20%' }}>
              <Icon name='card' type='Ionicons' style={{ color: orange, fontSize: 35, paddingLeft: '5%', }} />
              <Text style={{ fontWeight: 'bold', fontSize: 23, paddingLeft: '4%', }}>Payment metohds</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%', backgroundColor: 'white', width: "80%", alignSelf: 'center', paddingLeft: '10%', borderColor: orange, borderWidth: 1, borderRadius: 10 }}>
              <Text style={{ fontSize: 15, width: "70%", marginVertical: '5%', color: 'gray' }}>Save your payment in your delish account</Text>
              <Icon name='card' type='Ionicons' style={{ color: orange, fontSize: 35, paddingTop: '4%', paddingLeft: '5%', }} />
            </View>



            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')}>
                <Text style={{ marginLeft: '5%', paddingTop: '5%', fontSize: 20, color: orange }}>Back to resturants</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}


export default Delishpay;