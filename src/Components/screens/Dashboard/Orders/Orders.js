import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';

import {
    Header,
    Left,
    Body,
    Title,
    Icon
} from 'native-base';

import { orange } from '../../ColorTheme/color';





export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [{
                Text: 'Chocolate Cake',
                subText: 'Dessert',
                price: 'Rs. 1,399.00',
                key: 'item1'
            },
            {
                Text: 'Drink Small',
                subText: 'Beverages',
                price: 'Rs. 79.00',
                key: 'item2'
            },
            {
                Text: 'Drink Large',
                subText: 'Beverages',
                price: 'Rs. 179.00',
                key: 'item3'
            },
            {
                Text: 'Lava Cake',
                subText: 'Dessert',
                price: 'Rs. 249.00',
                key: 'item4'
            },
            {
                Text: 'Garlic Breads',
                subText: 'Appetizers',
                price: 'Rs. 299.00',
                key: 'item5'
            },
            {
                Text: 'Stuffed Potato',
                subText: 'Appetizers',
                price: 'Rs. 349.00',
                key: 'item6'
            },
            {
                Text: 'Chicken Salad',
                subText: 'New Arrival',
                price: 'Rs. 179.00',
                key: 'item7'
            }]

        };
    }

    render() {
        return (
            <View style={{
                flex: 1, backgroundColor: '#F3F3F3'
            }
            }>
                {/* Start Header View*/}

                <Header style={{ backgroundColor: orange }} noShadow>
                    <Left>
                        <TouchableOpacity transparent>
                            <Icon style={{ color: 'white' }} type="Entypo" name="cross" />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: 'white', fontWeight: 'bold', marginRight: 20 }}>Broadway Pizza-Garden East</Title>
                    </Body>

                </Header>

                {/* End Header  View*/}
                <ScrollView>
                    <View style={styles.container}>






                        <View style={{ width: '95%', paddingVertical: 10, backgroundColor: '#FFFFFF', marginTop: '3%', alignSelf: 'center', borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity><Icon type='AntDesign' name='minus' style={{ color: orange, fontSize: 20, marginLeft: '1%' }} /></TouchableOpacity>
                                    <Text style={{ marginLeft: '2%' }}>3</Text>
                                    <TouchableOpacity><Icon type='AntDesign' name='plus' style={{ color: orange, fontSize: 20, marginLeft: '15%' }} /></TouchableOpacity>
                                    <Text style={{ marginLeft: 10, color: 'grey' }}>Garden Salad</Text>
                                </View>


                                <View >
                                    <Text style={{ marginRight: 30 }}>Rs. 1,047.00</Text>
                                </View>

                            </View>





                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity><Icon type='AntDesign' name='minus' style={{ color: orange, fontSize: 20, marginLeft: '1%' }} /></TouchableOpacity>
                                    <Text style={{ marginLeft: '2%' }}>7</Text>
                                    <TouchableOpacity><Icon type='AntDesign' name='plus' style={{ color: orange, fontSize: 20, marginLeft: '12%' }} /></TouchableOpacity>
                                    <Text style={{ marginLeft: 10, color: 'grey' }}>Chicken Caesar Salad</Text>
                                </View>


                                <View >
                                    <Text style={{ marginRight: 30 }}>Rs. 2,793.00</Text>
                                </View>

                            </View>

                        </View>






                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 20, marginLeft: 10 }}>Popular with your order</Text>






                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            keyExtractor={(item) => item.key}
                            data={this.state.arr}
                            renderItem={({ item, index, separators }) => (
                                <View style={{ flexDirection: 'row', padding: 5, paddingHorizontal: 10, width: 200 }}>
                                    <View style={{ width: '100%', backgroundColor: '#FFFFFF', marginTop: '3%', marginLeft: 10, alignSelf: 'flex-start', borderRadius: 10 }}>

                                        <View style={{ flexDirection: 'column', marginTop: 10, paddingHorizontal: 10 }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 10 }}>{item.Text}</Text>
                                            <Text style={{ fontSize: 13, color: 'grey', marginLeft: 10 }}>{item.subText}</Text>
                                        </View>


                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, color: 'grey' }}>
                                            <Text style={{ marginBottom: 15, marginLeft: 10 }}>{item.price}</Text>

                                            <TouchableOpacity style={{ flexDirection: 'row', marginRight: 10 }}>
                                                <View><Icon type='AntDesign' name='plus' style={{ color: orange, fontSize: 10, marginTop: 7 }} /></View>
                                                <Text style={{ color: orange, marginBottom: 15, marginRight: 10 }}>Add</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            )
                            }
                        />






                        <View style={{ width: '95%', marginTop: 10, backgroundColor: '#FFFF', alignSelf: 'center', borderRadius: 5 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ color: 'grey', marginTop: 10 }}>SubTotal</Text>
                                <Text style={{ marginRight: 10, marginTop: 10 }}>Rs. 3,840.00</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ color: 'grey' }}>Delivery fee</Text>
                                <Text style={{ marginRight: 10 }}>Rs. 0.00</Text>
                            </View>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginTop: 5 }}>
                                <TouchableOpacity><Text style={{ color: orange, fontSize: 15 }}>Do you have a voucher?</Text></TouchableOpacity>

                            </View>



                            <View style={styles.stroke}></View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Total(incl. GST)</Text>
                                <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Rs. 3,840.00</Text>
                            </View>
                        </View>







                        <View style={{ width: '95%', marginTop: 20, backgroundColor: '#FFFF', alignSelf: 'center', borderRadius: 5 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ marginTop: 10 }}>Contact info</Text>
                                <Text style={{ marginRight: 10, color: 'grey', marginTop: 10 }}>Please Enter Contact info</Text>
                            </View>

                            <View style={styles.stroke}></View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ marginTop: 10 }}>Delivery details</Text>
                                <TouchableOpacity><Icon style={{ marginRight: 10, marginTop: 10, fontSize: 20, color: orange }} name="right" type="AntDesign" /></TouchableOpacity>
                            </View>


                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: 'grey', marginTop: 10, marginLeft: 10 }}>162, Garden East Karachi, Karachi City, Sindh,</Text>
                                <Text style={{ color: 'grey', marginTop: 3, marginLeft: 10 }}>Pakistan</Text>
                                <Text style={{ color: 'grey', marginTop: 3, marginLeft: 10 }}>Note to rider: none</Text>
                            </View>


                            <View style={styles.stroke}></View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                                <Text style={{ marginTop: 3, marginLeft: 10 }}>Delivery Time</Text>
                                <Text style={{ color: 'grey', marginTop: 3, marginLeft: 10, marginRight: 10 }}>NOW(20 min)</Text>
                            </View>
                        </View>



                        <View style={{ width: '95%', marginTop: 20, backgroundColor: '#FFFF', alignSelf: 'center', borderRadius: 5 }}>
                            <Text style={{ marginTop: 20, marginLeft: 10 }}>Payment Methods</Text>


                            <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                                <TouchableOpacity><Icon type='AntDesign' name='plus' style={{ color: orange, fontSize: 20, marginLeft: 10, marginTop: 30 }} /></TouchableOpacity>
                                <Text style={{ color: orange, marginTop: 30, marginLeft: 20 }}>Add a payment method</Text>
                            </View>

                        </View>



                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'grey', marginTop: 30, marginLeft: 20 }}>By completing this order, I agree to all Terms & Conditions.</Text>

                            <Text style={{ color: 'grey', marginTop: 10, marginLeft: 20 }}>Please note: sold by Broadway Pizza - Garden East</Text>
                        </View>




                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 10, paddingVertical: 25 }}>I agree and I demand that you execute the ordered service before the end of the revolution peroid.I am aware that after complete fulfilment of the service I lose my right of rescission.</Text>
                        </View>

                    </View>
                </ScrollView>


                <View style={{ width: '100%', height: '10%', backgroundColor: '#FFFF' }}>
                    <TouchableOpacity style={{ width: '70%', height: '80%', marginTop: '5%', backgroundColor: orange, alignSelf: 'center', bottom: 10 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.circle}>
                                <Text style={{ color: orange, textAlign: 'center' }}>2</Text>
                            </View>

                            <Text style={{ fontWeight: 'bold', color: '#FFFF', marginTop: '5%' }}>Place Order</Text>
                            <Text style={{ fontWeight: 'bold', color: '#FFFF', marginTop: '5%', marginRight: '10%' }}>Rs. 3,840.00</Text>

                        </View>
                    </TouchableOpacity>

                </View>
            </View >
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: '100%',
        backgroundColor: '#F3F3F3',
    },
    stroke: {
        width: '95%',
        height: 2,
        borderColor: '#EFEFEF',
        borderWidth: 1,
        marginTop: 10,
        alignSelf: 'center'
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 100 / 2,
        backgroundColor: '#FFFF',
        marginTop: '5%',
        marginLeft: '5%',
    }

});