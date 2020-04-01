import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    Icon,
    Tab,
    Tabs,
    ScrollableTab
} from 'native-base';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

import { orange } from '../../ColorTheme/color';






export default class OffersandDeals extends Component {

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
            <View style={styles.container}>
                <ParallaxScrollView
                    renderBackground={() => (
                        <View>
                            <Image style={styles.overlay} source={require('../../../../Assets/Images/cover.jpg')} />
                        </View>
                    )}

                    parallaxHeaderHeight={250}

                    stickyHeaderHeight={70}






                    renderStickyHeader={() => (

                        <View>

                            <View style={styles.stickySection}>


                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')} >
                                    <Icon style={{ fontSize: 20, color: '#FFF' }} name="arrow-back" />
                                </TouchableOpacity>

                                <Text style={styles.stickySectionText}>Delivery 30 min</Text>

                                <TouchableOpacity>
                                    <Icon style={{ fontSize: 20, color: '#FFF' }} name="ios-information-circle-outline" />
                                </TouchableOpacity>

                            </View>



                        </View>
                    )}




                    renderForeground={() => (


                        <View style={{ flex: 1 }} >
                            <View style={{ paddingVertical: '5%' }}>


                                <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Icon name="arrowleft" type="AntDesign" style={{ color: "#FFF" }} />
                                    </TouchableOpacity>

                                    <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>BROADWAY PIZZA </Text>

                                    <TouchableOpacity onPress={() => alert('hi')}>
                                        <Icon name="ios-information-circle-outline" style={{ color: "#FFF" }} />
                                    </TouchableOpacity>

                                </View>



                                <Text style={{ textAlign: 'center', color: "#FFF", fontSize: 24, fontWeight: "bold" }}> GARDEN</Text>

                                <Text style={{ alignSelf: 'center', color: "#FFF", marginTop: '5%', borderColor: "#FFF", borderWidth: 1, width: '30%', textAlign: 'center' }}> Delivery 30 min</Text>


                                <View style={{ flexDirection: "row", alignSelf: 'center', marginTop: '5%' }}>
                                    <Icon name="star" style={{ color: "#FFF", fontSize: 18 }} />
                                    <Text style={{ fontWeight: "bold", color: "#FFF" }}>4.2</Text>
                                    <Text style={{ color: "#FFF" }}>(529)</Text>
                                </View>
                            </View>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#EEF4FA", width: '100%', paddingVertical: '5%' }}>

                                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: '5%' }}>Up To 70% OFF</Text>
                                <Icon name="gift" style={{ color: "blue", marginRight: '5%' }} />

                            </View>

                        </View>

                    )}>











                    {/* <Header hasTabs transparent /> */}
                    <Tabs renderTabBar={() => <ScrollableTab />}
                        tabsContainerStyle={{ backgroundColor: '#FFF', }}
                        tabBarUnderlineStyle={{ backgroundColor: orange }}


                    >
                        <Tab textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: '#FFF' }} tabStyle={{ backgroundColor: '#fff' }} heading="CRICKET DEAL">

                            <View style={{ width: '100%', backgroundColor: '#FBFBFB', marginTop: '5%' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 20 }}>Cricket Deal</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Cricket Deal</Text>
                                <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>13 inch large piza, 5 pieces garlic breads, 2 sauce & large drink</Text>
                                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 1,049.00</Text>
                            </View>

                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>BBQ Ranch Wings</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>6 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>


                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>BBQ Ranch Wings</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>6 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>


                        </Tab>


                        <Tab textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: '#fff' }} tabStyle={{ backgroundColor: '#fff' }} heading="NEW ARRIVAL">

                            <View style={{ width: '100%', backgroundColor: '#FBFBFB', marginTop: '5%' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 20 }}>New Arrival</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Garden Salad</Text>
                                <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>Iceberg, tomatoes, cucumber, onions, jalapeno, spring onion, sweet corn & garlic ranch sauce</Text>
                                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>


                                <View style={styles.stroke}></View>


                                <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 20 }}>Chicken Caesar Salad</Text>
                                <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>Iceberg, tomatoes, cucumber, onions, jalapeno, spring onion, sweet corn & garlic ranch sauce</Text>

                                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 399.00</Text>

                                <View style={styles.stroke}></View>



                                <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>BBQ Ranch Wings</Text>
                                <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>6 Pieces</Text>

                                <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>


                            </View>

                        </Tab>


                        <Tab textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: '#fff' }} tabStyle={{ backgroundColor: '#fff' }} heading="APPETIZERS">

                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 20 }}>Appetizer</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Appetizer Plater Box</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>2 Pieces potato skins, 3 pieces wings, 2 pieces bread with cheese, 2 pieces (90 grams) potato wedges</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 499.00</Text>



                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Garlic Breads</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>5 Pieces Baked bread in garlic sauce</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 299.00</Text>


                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Garlic Breads with Cheese</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>5 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>

                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Tikka Breads</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>4 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>





                        </Tab>


                        <Tab textStyle={{ color: 'black' }} activeTextStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: '#fff' }} tabStyle={{ backgroundColor: '#fff' }} heading="CHICKEN WINGS">

                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30, marginLeft: 20 }}>Chicken Wings..</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Garlic Mayo Wings</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>6 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>



                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>BBQ Ranch Wings</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>6 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>


                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>Garlic Breads with Cheese</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>5 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>

                            <View style={styles.stroke}></View>



                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20, marginLeft: 20 }}>jalapeno Ranch Wings</Text>
                            <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 20, color: 'grey' }}>6 Pieces</Text>

                            <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 280, color: 'grey' }}>Rs. 349.00</Text>


                        </Tab>

                    </Tabs>



                </ParallaxScrollView >
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
    overlay: {
        opacity: 0.6,
        height: '100%',
        width: '100%'
    },
    stickySection: {
        height: '100%',
        width: '100%',
        backgroundColor: orange,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'


    },
    stickySectionText: {
        color: '#FFF',
        fontSize: 17,
        textAlign: 'center',
    },
    stroke: {
        width: '90%',
        height: 2,
        borderColor: '#EFEFEF',
        borderWidth: 1,
        alignSelf: 'center'
    },

})