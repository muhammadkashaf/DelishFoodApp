import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  Left,
  Body,
  Title,
  Icon,
  Button
} from 'native-base';

import { orange } from '../../ColorTheme/color'




export default class Signup extends Component {

  static navigationOptions = {
    drawerLabel: () => null,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }




  render() {
    return (
      <View styles={styles.container}>
        <ScrollView>
          {/* Start Header View*/}

          <Header style={{ backgroundColor: orange }} noShadow>
            <Left>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} transparent>
                <Icon style={{ color: 'white' }} type="Entypo" name="cross" />
              </TouchableOpacity>
            </Left>
            <Body>
              <Title style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Create account</Title>
            </Body>

          </Header>

          {/* End Header  View*/}






          <View style={styles.text}>

            <Text style={{ color: 'grey' }}>Create an account to save all your info for </Text>
          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{ color: 'grey', textAlign: 'center' }}>your next order</Text>
          </View>




          {/* Start Button View*/}


          <View style={styles.facebookbtnView}>

            <Button block>
              <View style={{ marginLeft: "4%" }} >
                <Icon type="MaterialCommunityIcons" name="facebook" />
              </View>

              <View style={{ marginRight: 30 }}>
                <Text style={{ color: 'white' }}>LOG IN WITH FACEBOOK</Text>
              </View>

            </Button>

          </View>
          {/* End Button View*/}





          {/* Start Button View*/}

          <View style={styles.facebookbtnView}>

            <Button onPress={() => this.props.navigation.navigate('SignUpWithEmail')} block style={{ backgroundColor: orange }}>
              <View style={{ marginLeft: "4%" }} >
                <Icon type="MaterialCommunityIcons" name="gmail" />
              </View>

              <View style={{ marginRight: 30, }}>
                <Text style={{ color: 'white' }}>SIGN UP WITH EMAIL</Text>
              </View>

            </Button>

          </View>
          {/* End Button View*/}




          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}><Text style={styles.subText}>Already a member? Log in</Text></TouchableOpacity>


        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F3F3F3',
  },

  text: {
    fontSize: 17,
    fontFamily: "roboto-regular",
    marginTop: '6%',
    marginLeft: '15%',

  },
  subText: {
    color: "#D70F64",
    fontSize: 17,
    fontFamily: "roboto-regular",
    marginTop: '5%',
    textAlign: 'center'
  },
  facebookbtnView: {
    marginTop: '5%',
    width: '70%',
    alignSelf: 'center',
  },
})