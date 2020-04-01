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
    Button,
    Form,
    Textarea
} from 'native-base';

import RadioButton from 'react-native-radio-button';

import { orange } from '../../ColorTheme/color';





export default class Customize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkIn: false
        };
    }





    render() {
        return (

            <View style={styles.container}>

                {/* Start Header View*/}

                <Header style={{ backgroundColor: orange }} noShadow>
                    <Left>
                        <Button transparent>
                            <Icon style={{ color: 'white' }} type="Entypo" name="cross" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Customize</Title>
                    </Body>

                </Header>

                {/* End Header  View*/}

                <ScrollView>


                    <View style={{ width: '100%', height: '100%', backgroundColor: '#FBFBFB', marginTop: '5%' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 15 }}>Cricket Deal</Text>
                            <Text style={{ fontSize: 17, marginTop: 10, color: 'grey', marginRight: 15 }}>Rs. 1,049.00</Text>
                        </View>

                        <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>13 inch large piza, 5 pieces garlic breads, 2 sauce & large drink</Text>





                        <View style={styles.stroke} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 10 }}>Choose Your Crust</Text>

                            <View style={styles.reqbox}>
                                <Text style={styles.reqText}>1 REQUIRED</Text>
                            </View>

                        </View>

                        <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 20 }}>Select one</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
                                <RadioButton
                                    animation={'bounceIn'}
                                    outerColor={'grey'}
                                    innerColor={'#FFA800'}
                                    isSelected={this.state.checkIn}
                                    onPress={() => this.setState({ checkIn: this.state.checkIn ? false : true })}
                                />
                                <Text style={{ marginLeft: '10%' }}>Stuffed Crust</Text>

                            </View>
                            <Text style={{ marginRight: 20, color: '#9F9F9F' }}>+ Rs. 0.00</Text>
                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
                                <RadioButton
                                    animation={'bounceIn'}
                                    outerColor={'grey'}
                                    innerColor={'#FFA800'}
                                    isSelected={this.state.checkIn}
                                    onPress={() => this.setState({ checkIn: this.state.checkIn ? false : true })}
                                />
                                <Text style={{ marginLeft: '10%' }}>Thin N Crispy</Text>
                            </View>
                            <Text style={{ marginRight: 20, color: '#9F9F9F' }}>+ Rs. 0.00</Text>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 10 }}>Choose Your Flavor</Text>

                            <View style={styles.reqbox}>
                                <Text style={styles.reqText}>1 REQUIRED</Text>
                            </View>

                        </View>



                        <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 20 }}>Select one</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
                                <RadioButton
                                    animation={'bounceIn'}
                                    outerColor={'grey'}
                                    innerColor={'#FFA800'}
                                    isSelected={this.state.checkIn}
                                    onPress={() => this.setState({ checkIn: this.state.checkIn ? false : true })}
                                />
                            </View>
                            <Text style={{ marginRight: 20, color: '#9F9F9F' }}>+ Rs. 0.00</Text>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>

                                <RadioButton
                                    animation={'bounceIn'}
                                    outerColor={'grey'}
                                    innerColor={'#FFA800'}
                                    isSelected={this.state.checkIn}
                                    onPress={() => this.setState({ checkIn: this.state.checkIn ? false : true })}
                                />
                                <Text style={{ marginLeft: '10%' }}>Mamma Mia Classic</Text>

                            </View>
                            <Text style={{ marginRight: 20, color: '#9F9F9F' }}>+ Rs. 0.00</Text>
                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>

                                <RadioButton
                                    animation={'bounceIn'}
                                    outerColor={'grey'}
                                    innerColor={'#FFA800'}
                                    isSelected={this.state.checkIn}
                                    onPress={() => this.setState({ checkIn: this.state.checkIn ? false : true })}
                                />
                                <Text style={{ marginLeft: '10%' }}>Chicago Bold Fold</Text>

                            </View>
                            <Text style={{ marginRight: 20, color: '#9F9F9F' }}>+ Rs. 0.00</Text>
                        </View>






                        <View style={styles.stroke} />



                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', marginLeft: '5%', marginTop: '5%' }}>Special instructions</Text>
                            <Text style={{ fontSize: 13, marginLeft: '5%', marginTop: '3%' }}>Please let us know if you are allergic to anything or if we need to avoid anything</Text>

                            <Form>
                                <Textarea style={{ width: '90%', alignSelf: 'center', top: '10%', marginBottom: '20%' }} rowSpan={5} bordered placeholder="e.g No mayo" />
                            </Form>
                        </View>


                    </View>


                </ScrollView >

                <View style={{ width: '100%', backgroundColor: '#FFFF', paddingVertical: 20, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity><Icon type='AntDesign' name='minus' style={{ color: orange, fontSize: 20, marginLeft: 7, marginTop: '10%' }} /></TouchableOpacity>
                        <Text style={{ marginLeft: '2%' }}>3</Text>
                        <TouchableOpacity><Icon type='AntDesign' name='plus' style={{ color: orange, fontSize: 20, marginLeft: '10%', marginTop: '3%' }} /></TouchableOpacity>


                        <TouchableOpacity style={{ width: '60%', marginTop: 5, backgroundColor: orange, alignSelf: 'center', paddingVertical: 10, bottom: 10 }}>
                            <Text style={{ color: '#FFFF', fontWeight: 'bold', textAlign: 'center' }}>ADD TO CART</Text>
                        </TouchableOpacity>

                    </View>



                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#F3F3F3',
    },
    stroke: {
        width: '90%',
        height: 2,
        borderColor: '#EFEFEF',
        borderWidth: 1,
        marginTop: 20,
        alignSelf: 'center'
    },

    reqbox: {
        width: 100,
        height: 30,
        backgroundColor: "#F3F4F2",
        borderRadius: 2,
        borderColor: "grey",
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginRight: 10,
    },
    reqText: {
        color: "#638DB5",
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: "roboto-700",
        textAlign: 'center',
    },
});