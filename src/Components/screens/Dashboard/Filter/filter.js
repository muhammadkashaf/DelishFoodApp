import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

import { Icon, CheckBox } from 'native-base';

import { orange } from '../../ColorTheme/color';







class filter extends Component {

  static navigationOptions = {
    drawerLabel: () => null,
  };


  constructor(props) {
    super(props);

    this.state = {
      itemOne: false,
      itemTwo: false,
      itemThree: false,
      itemFour: false,
      itemFive: false,
      itemSix: false,
      itemSeven: false,
      itemEight: false,
      label1: false,
      label2: false,
      label3: false
    }
  }





  CancelModal = () => {

    Alert.alert(
      '',
      'Are you sure you would like to clear your current filter settings?',
      [

        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => this.props.navigation.navigate('AuthLoading') },
      ],
      { cancelable: false },

    );
  }



  render() {

    const { label1, label2, label3 } = this.state




    return (
      <View style={{ flex: 1 }}>


        {/* Start Header View*/}



        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: orange, width: '100%', height: '10%', shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 5, }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ alignSelf: 'center', }}>
            <Icon style={{ paddingLeft: '5%', color: 'white' }} name='arrowleft' type='AntDesign' />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', fontSize: 20, color: 'white', paddingRight: '30%' }}>Filters</Text>

          <TouchableOpacity onPress={() => this.CancelModal()} style={{ marginTop: '7%' }}>

            {this.state.label1 || this.state.label2 || this.state.label3 || this.state.itemOne || this.state.itemTwo || this.state.itemThree || this.state.itemFour || this.state.itemFive || this.state.itemSix || this.state.itemSeven || this.state.itemEight ? <Text style={{ fontSize: 13, color: 'white', paddingRight: '5%' }}>CLEAR ALL</Text> : null}

          </TouchableOpacity>



        </View>

        {/* End Header View*/}










        <ScrollView>
          <View style={{ backgroundColor: 'white', marginTop: '2%', width: '90%', height: '17%', marginLeft: '5%', shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 2, paddinVertical: '10%' }}>
            <View>
              <Text style={{ marginTop: '2%', paddingLeft: '10%', fontSize: 20, fontWeight: 'bold' }}>Price</Text>
            </View>


            <View style={{ flexDirection: 'row', paddingLeft: "5%", marginTop: '5%', width: '90%', height: '60%', }}>
              <View style={{ paddingLeft: '2%', width: '33%' }}>
                <TouchableOpacity onPress={() => this.setState({ label1: !this.state.label1 })}

                  style={!this.state.label1 ? { alignItems: 'center', paddingTop: '5%', width: '100%', height: '50%', borderWidth: 2, borderColor: orange, } : styles.label}>

                  <Text style={{ fontSize: 20, color: 'black' }}>$</Text>
                </TouchableOpacity>
              </View>


              <View style={{ paddingLeft: '2%', width: '33%' }}>

                <TouchableOpacity onPress={() => this.setState({ label2: !this.state.label2 })}

                  style={!this.state.label2 ? { alignItems: 'center', paddingTop: '5%', width: '100%', height: '50%', borderWidth: 2, borderColor: orange, } : styles.label}>


                  <Text style={{ fontSize: 20, color: 'black' }}>$$</Text>
                </TouchableOpacity>
              </View>


              <View style={{ paddingLeft: '2%', width: '33%' }}>

                <TouchableOpacity onPress={() => this.setState({ label3: !this.state.label3 })}

                  style={!this.state.label3 ? { alignItems: 'center', paddingTop: '5%', width: '100%', height: '50%', borderWidth: 2, borderColor: orange, } : styles.label}>

                  <Text style={{ fontSize: 20, color: 'black' }}>$$$</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>








          <View style={{ backgroundColor: 'white', paddingBottom: 40, width: '90%', marginTop: "2%", marginLeft: '5%', paddingTop: '5%', shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 2, }}>
            <View>
              <Text style={{ marginTop: '2%', paddingLeft: '10%', fontSize: 20, fontWeight: 'bold' }}>Offers</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Online payment available</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.itemOne} onPress={() => this.setState({ itemOne: !this.state.itemOne })}
                  color={orange} />
              </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Accepts Vouchers</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.itemTwo} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })}
                  color={orange} />
              </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Free delivery</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.itemThree} onPress={() => this.setState({ itemThree: !this.state.itemThree })}
                  color={orange} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Deals</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.itemFour} onPress={() => this.setState({ itemFour: !this.state.itemFour })}
                  color={orange} />
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'white', paddingBottom: 40, width: '90%', marginTop: "2%", marginLeft: '5%', paddingTop: '5%', shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 2, }}>
            <View>
              <Text style={{ marginTop: '2%', paddingLeft: '10%', fontSize: 20, fontWeight: 'bold' }}>Offers</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Pakistani</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.itemFive} onPress={() => this.setState({ itemFive: !this.state.itemFive })}
                  color={orange} />
              </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Beverage</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.itemSix} onPress={() => this.setState({ itemSix: !this.state.itemSix })}
                  color={orange} />
              </View>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Fast Food</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.checked} onPress={() => this.setState({ checked: !this.state.checked })}
                  color={orange} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
              <View style={{ marginTop: '5%', width: '50%' }}>
                <Text style={{ fontSize: 18 }}>Burgers</Text>
              </View>

              <View style={{ marginTop: '5%', width: '50%' }}>
                <CheckBox checked={this.state.itemSeven} onPress={() => this.setState({ itemSeven: !this.state.itemSeven })}
                  color={orange} />
              </View>
            </View>
          </View>




          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15%', width: '100%' }}>
            <View style={{ marginTop: '5%', width: '50%' }}>
              <Text style={{ fontSize: 18 }}>Pizza</Text>
            </View>

            <View style={{ marginTop: '5%', width: '50%' }}>
              <CheckBox checked={this.state.itemEight} onPress={() => this.setState({ itemEight: !this.state.itemEight })}
                color={orange} />
            </View>
          </View>



        </ScrollView >
        <View style={{ flex: 1, position: 'absolute', width: '100%', bottom: 0, backgroundColor: 'black' }}>
          <TouchableOpacity >
            <View style={{ flex: 2, width: "100%", backgroundColor: orange, }}>
              <Text style={{ alignSelf: 'center', padding: '5%', color: 'white', paddingVertical: 10, fontSize: 20 }}>Apply Filters</Text>
            </View>
          </TouchableOpacity>
        </View>









      </View >
    );
  }
}


export default filter;


const styles = StyleSheet.create({
  label: {
    backgroundColor: orange,
    alignItems: 'center',
    paddingTop: '5%',
    width: '100%',
    height: '50%',
  }
})