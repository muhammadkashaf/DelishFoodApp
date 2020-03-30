import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Header, Left, Body, Title, Icon, Tabs, Tab } from 'native-base';

import { orange } from '../color';

export default class MyVoucher extends Component {


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

                {/* Start Header View*/}

                <Header style={{ backgroundColor: orange }} noShadow>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')}>
                            <Icon style={{ color: 'white' }} type="AntDesign" name="arrowleft" />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ color: 'white', fontWeight: 'bold', right: '10%' }}>My vouchers</Title>
                    </Body>

                </Header>

                {/* End Header  View*/}






                <Tabs
                    tabsContainerStyle={{ backgroundColor: 'white', }}
                    tabBarUnderlineStyle={{ backgroundColor: orange }}>
                    <Tab heading="CURRENT" tab tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>
                        <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
                            <ScrollView>

                                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F9F9F9', paddingVertical: '10%', justifyContent: 'center' }}>
                                    <ImageBackground style={{ width: 200, height: 200 }} source={require('../../Assets/Images/myvoucher.png')} />

                                    <Text style={{ fontWeight: 'bold', top: '5%', fontSize: 17 }}>No Vouchers Yet</Text>


                                    <Text style={{ top: '10%', fontSize: 15, color: 'grey' }}>It seems you have no vouchers yet. You</Text>
                                    <Text style={{ top: '10%', fontSize: 15, color: 'grey' }}>can refer a friend to get your first one.</Text>


                                </View>

                            </ScrollView>
                        </View>
                    </Tab>



                    <Tab heading="PAST" tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'black' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: 'black', fontWeight: 'normal' }}>

                        <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
                            <ScrollView>

                                  <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F9F9F9', paddingVertical: '10%', justifyContent: 'center' }}>
                                    <ImageBackground style={{ width: 200, height: 200 }} source={require('../../Assets/Images/myvoucher.png')} />

                                    <Text style={{ fontWeight: 'bold', top: '5%', fontSize: 17 }}>No Vouchers Yet</Text>


                                    <Text style={{ top: '10%', fontSize: 15, color: 'grey' }}>It seems you have no vouchers yet. You</Text>
                                    <Text style={{ top: '10%', fontSize: 15, color: 'grey' }}>can refer a friend to get your first one.</Text>
                                </View>
                            </ScrollView>
                        </View>

                    </Tab>
                </Tabs>
            </View >

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F9F9F9',

    },
})