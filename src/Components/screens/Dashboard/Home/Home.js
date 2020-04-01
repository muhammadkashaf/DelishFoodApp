import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';

import {
    Icon,
    Header,
    Left,
    Body,
    Title
} from 'native-base';

import { orange } from '../../ColorTheme/color';







export default class Home extends Component {

    static navigationOptions = {
        drawerLabel: () => null,
    };


    constructor(props) {
        super(props);
        this.state = {
            arr: [{
                img: require('../../../../Assets/Images/cover.jpg'),
                flat: 'Flat 70% OFF',
                time: '35 mins',
                delievery: 'Free delievery',
                Text: 'Chocolate Cake',
                subText: 'Dessert',
                price: 'Rs. 1,399.00',
                key: 'item1'
            },
            {
                img: require('../../../../Assets/Images/cover.jpg'),
                flat: 'Flat 20% OFF',
                time: '40 mins',
                delievery: 'Free delievery',
                Text: 'Drink Small',
                subText: 'Beverages',
                price: 'Rs. 79.00',
                key: 'item2'
            },
            {
                img: require('../../../../Assets/Images/cover.jpg'),
                flat: 'Flat 40% OFF',
                time: '50 mins',
                delievery: 'Free delievery',
                Text: 'Drink Large',
                subText: 'Beverages',
                price: 'Rs. 179.00',
                key: 'item3'
            },
            {
                img: require('../../../../Assets/Images/cover.jpg'),
                flat: 'Flat 30% OFF',
                time: '60 mins',
                delievery: 'Free delievery',
                Text: 'Stuffed Potato',
                subText: 'Appetizers',
                price: 'Rs. 349.00',
                key: 'item6'
            },
            {
                img: require('../../../../Assets/Images/cover.jpg'),
                flat: 'Flat 90% OFF',
                time: '70 mins',
                delievery: 'Free delievery',
                Text: 'Chicken Salad',
                subText: 'New Arrival',
                price: 'Rs. 179.00',
                key: 'item7'
            }],


            expand: false,
        };
    }



    toggleExpanded = () => {
        this.setState({
            expand: !this.state.expand
        });
        console.log('expand handler: ' + this.state.expand);

    }




    render() {
        const { expand } = this.state;

        return (


            <View style={styles.container} >


                {/* Start Header View*/}




                < Header style={{ backgroundColor: 'white' }} >
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} transparent>
                            <Icon style={{ color: orange, left: '5%' }} type='EvilIcons' name='navicon'
                            />
                        </TouchableOpacity>
                    </Left>

                    <Body style={{ flexDirection: 'row', marginRight: '40%' }}>
                        <Title style={{ color: '#A1A1A1' }}>Deliver to: </Title>

                        <TouchableOpacity onPress={() => this.toggleExpanded()}>
                            <Title style={{ color: 'black', fontWeight: 'bold' }}>Current location</Title>
                        </TouchableOpacity>


                    </Body>
                </Header >


                {this.state.expand ? <View style={{ width: '100%' }}>
                    <View style={{ backgroundColor: '#FFF', }}>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Icon style={{ color: '#FFA800', fontSize: 20, marginLeft: '15%' }} type="Ionicons" name="md-locate" />
                            <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: '5%' }}>Current Location</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={{ backgroundColor: '#FFF', paddingVertical: '5%' }}>

                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Icon style={{ color: '#FFA800', fontSize: 17, marginLeft: '15%' }} type="AntDesign" name="pluscircleo" />
                            <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: '5%' }}>Add New Address</Text>
                        </TouchableOpacity>

                    </View>
                </View> : null}




                {/* End Header  View*/}







                {/* Start Search View*/}

                < View style={styles.search} >
                    <View style={styles.searchContent}>

                        <View>
                            <Icon style={{ color: orange, paddingVertical: '5%', }} type='EvilIcons' name='search' />
                        </View>

                        <TextInput style={styles.input} placeholder='Cuisin or a resturant name' />

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Filter')}>
                            <Icon style={{ color: orange, paddingVertical: '5%' }} type='MaterialIcons' name='filter-list' />
                        </TouchableOpacity>

                    </View>
                </View >


                {/* End Search View*/}









                {/* Start Content, Cards & Others View*/}
                <ScrollView>
                    < View >
                        <Text style={styles.headings}>Featured</Text>
                    </View >


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item) => item.key}
                        data={this.state.arr}
                        renderItem={({ item, index, separators }) => (
                            <View style={{ flexDirection: 'row', padding: 5, paddingHorizontal: 10, width: 300, }}>
                                <View style={{
                                    width: '100%', backgroundColor: '#FFFFFF', marginTop: '3%', marginLeft: 10, alignSelf: 'flex-start', borderRadius: 10, shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OfferandDeals')} style={{ flexDirection: 'column', marginTop: 10, paddingHorizontal: 10, }}>

                                        <Image style={{ width: 300, height: 200 }} source={item.img} />
                                        <View style={{ flexDirection: 'column', position: 'absolute', }}>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%' }}>{item.flat}</Text>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%', marginTop: '5%' }}>{item.delievery}</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>

                                            <Text style={{ width: 50, height: 50, backgroundColor: 'white', position: 'absolute', textAlign: 'center' }}>{item.time}</Text>
                                        </View>

                                        <Text style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 10 }}>{item.Text}</Text>
                                        <Text style={{ fontSize: 13, color: 'grey', marginLeft: 10 }}>{item.subText}</Text>
                                    </TouchableOpacity>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, color: 'grey' }}>
                                        <Text style={{ marginBottom: 15, marginLeft: 10 }}>{item.price}</Text>


                                    </View>
                                </View>
                            </View>

                        )
                        }
                    />




                    < View >
                        <Text style={styles.headings}>Cricket Deals - Up to 70% off</Text>
                    </View >


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item) => item.key}
                        data={this.state.arr}
                        renderItem={({ item, index, separators }) => (
                            <View style={{ flexDirection: 'row', padding: 5, paddingHorizontal: 10, width: 300, }}>
                                <View style={{
                                    width: '100%', backgroundColor: '#FFFFFF', marginTop: '3%', marginLeft: 10, alignSelf: 'flex-start', borderRadius: 10, shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>

                                    <View style={{ flexDirection: 'column', marginTop: 10, paddingHorizontal: 10, }}>

                                        <Image style={{ width: 300, height: 200 }} source={item.img} />
                                        <View style={{ flexDirection: 'column', position: 'absolute', }}>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%' }}>{item.flat}</Text>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%', marginTop: '5%' }}>{item.delievery}</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>

                                            <Text style={{ width: 50, height: 50, backgroundColor: 'white', position: 'absolute', textAlign: 'center' }}>{item.time}</Text>
                                        </View>

                                        <Text style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 10 }}>{item.Text}</Text>
                                        <Text style={{ fontSize: 13, color: 'grey', marginLeft: 10 }}>{item.subText}</Text>
                                    </View>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, color: 'grey' }}>
                                        <Text style={{ marginBottom: 15, marginLeft: 10 }}>{item.price}</Text>


                                    </View>
                                </View>
                            </View>

                        )
                        }
                    />




                    < View >
                        <Text style={styles.headings}>Fast delievery</Text>
                    </View >


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item) => item.key}
                        data={this.state.arr}
                        renderItem={({ item, index, separators }) => (
                            <View style={{ flexDirection: 'row', padding: 5, paddingHorizontal: 10, width: 300, }}>
                                <View style={{
                                    width: '100%', backgroundColor: '#FFFFFF', marginTop: '3%', marginLeft: 10, alignSelf: 'flex-start', borderRadius: 10, shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>

                                    <View style={{ flexDirection: 'column', marginTop: 10, paddingHorizontal: 10, }}>

                                        <Image style={{ width: 300, height: 200 }} source={item.img} />
                                        <View style={{ flexDirection: 'column', position: 'absolute', }}>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%' }}>{item.flat}</Text>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%', marginTop: '5%' }}>{item.delievery}</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>

                                            <Text style={{ width: 50, height: 50, backgroundColor: 'white', position: 'absolute', textAlign: 'center' }}>{item.time}</Text>
                                        </View>

                                        <Text style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 10 }}>{item.Text}</Text>
                                        <Text style={{ fontSize: 13, color: 'grey', marginLeft: 10 }}>{item.subText}</Text>
                                    </View>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, color: 'grey' }}>
                                        <Text style={{ marginBottom: 15, marginLeft: 10 }}>{item.price}</Text>


                                    </View>
                                </View>
                            </View>

                        )
                        }
                    />






                    < View >
                        <Text style={styles.headings}>Ghar ka Khana</Text>
                    </View >


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item) => item.key}
                        data={this.state.arr}
                        renderItem={({ item, index, separators }) => (
                            <View style={{ flexDirection: 'row', padding: 5, paddingHorizontal: 10, width: 300, }}>
                                <View style={{
                                    width: '100%', backgroundColor: '#FFFFFF', marginTop: '3%', marginLeft: 10, alignSelf: 'flex-start', borderRadius: 10, shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>

                                    <View style={{ flexDirection: 'column', marginTop: 10, paddingHorizontal: 10, }}>

                                        <Image style={{ width: 300, height: 200 }} source={item.img} />
                                        <View style={{ flexDirection: 'column', position: 'absolute', }}>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%' }}>{item.flat}</Text>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%', marginTop: '5%' }}>{item.delievery}</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>

                                            <Text style={{ width: 50, height: 50, backgroundColor: 'white', position: 'absolute', textAlign: 'center' }}>{item.time}</Text>
                                        </View>

                                        <Text style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 10 }}>{item.Text}</Text>
                                        <Text style={{ fontSize: 13, color: 'grey', marginLeft: 10 }}>{item.subText}</Text>
                                    </View>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, color: 'grey' }}>
                                        <Text style={{ marginBottom: 15, marginLeft: 10 }}>{item.price}</Text>


                                    </View>
                                </View>
                            </View>

                        )
                        }
                    />








                    < View >
                        <Text style={styles.headings}>Delish delievery</Text>
                    </View >


                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={(item) => item.key}
                        data={this.state.arr}
                        renderItem={({ item, index, separators }) => (
                            <View style={{ flexDirection: 'row', padding: 5, paddingHorizontal: 10, width: 300, }}>
                                <View style={{
                                    width: '100%', backgroundColor: '#FFFFFF', marginTop: '3%', marginLeft: 10, alignSelf: 'flex-start', borderRadius: 10, shadowColor: "#000",
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>

                                    <View style={{ flexDirection: 'column', marginTop: 10, paddingHorizontal: 10, }}>

                                        <Image style={{ width: 300, height: 200 }} source={item.img} />
                                        <View style={{ flexDirection: 'column', position: 'absolute', }}>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%' }}>{item.flat}</Text>
                                            <Text style={{ width: 100, backgroundColor: orange, marginLeft: '5%', marginTop: '5%' }}>{item.delievery}</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: -10 }}>

                                            <Text style={{ width: 50, height: 50, backgroundColor: 'white', position: 'absolute', textAlign: 'center' }}>{item.time}</Text>
                                        </View>

                                        <Text style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 10 }}>{item.Text}</Text>
                                        <Text style={{ fontSize: 13, color: 'grey', marginLeft: 10 }}>{item.subText}</Text>
                                    </View>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, color: 'grey' }}>
                                        <Text style={{ marginBottom: 15, marginLeft: 10 }}>{item.price}</Text>


                                    </View>
                                </View>
                            </View>

                        )
                        }
                    />
                </ScrollView>
                {/* End Content, Cards & Others View*/}




            </View >
        )
    }
}






const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: 'white'
    },
    search: {
        width: '90%',
        backgroundColor: 'white',
        marginTop: '5%',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchContent: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    input: {
        paddingVertical: '5%',
        color: '#FEFEFE',
        fontWeight: 'bold'
    },
    headings: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: '5%',
        marginTop: '5%'
    },
})