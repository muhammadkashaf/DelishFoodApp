import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';

import {
    Header,
    Left,
    Body,
    Title,
    Icon,
    Button
} from 'native-base';

import { orange } from '../../ColorTheme/color';








export default class MyOrders extends Component {

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
                        <Title style={{ color: 'white', fontWeight: 'bold' }}>My orders</Title>
                    </Body>

                </Header>

                {/* End Header  View*/}

                <ScrollView>

                    {/* Start BgImage  View*/}


                    <View style={{ marginTop: '20%', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <ImageBackground style={{ width: 200, height: 200 }} source={require('../../../../Assets/Images/myorder.png')} />

                        <Text style={{ fontWeight: 'bold', top: '5%', fontSize: 17 }}>No orders yet</Text>


                        <Text style={{ top: '7%', fontSize: 13, color: 'grey' }}>You don't have any orders yet. Try one of our</Text>
                        <Text style={{ top: '7%', fontSize: 13, color: 'grey' }}>awesome resturants and place your first order!</Text>

                        <Button block onPress={() => this.props.navigation.navigate('AuthLoading')} style={{ backgroundColor: orange, marginTop: '10%', width: '90%', alignSelf: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>BROWSE RESTAURANTS IN YOUR AREA</Text>
                        </Button>
                    </View>

                    {/* End BgImage  View*/}


                </ScrollView>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#FFF',

    },
})