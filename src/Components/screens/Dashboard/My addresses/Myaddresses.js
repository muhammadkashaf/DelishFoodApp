import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import {
    Header,
    Left,
    Body,
    Title,
    Icon
} from 'native-base';

import { orange } from '../../ColorTheme/color';







export default class Myaddresses extends Component {
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

            <View style={{ flex: 1 }}>
                {/* Start Header View*/}

                <Header style={{ backgroundColor: orange }} noShadow>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')}>
                            <Icon style={{ color: 'white' }} type="AntDesign" name="arrowleft" />
                        </TouchableOpacity>
                    </Left>

                    <Body>
                        <Title style={{ color: 'white', fontWeight: 'bold', right: '20%' }}>My Addresses</Title>
                    </Body>


                </Header>

                {/* End Header  View*/}
                <ScrollView>
                    <View style={styles.container}>


                        {/* Start BgImage  View*/}


                        <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 100 }}>
                            <ImageBackground style={{ width: 200, height: 200 }} source={require('../../../../Assets/Images/address.png')} />

                            <Text style={{ fontWeight: 'bold', top: '5%', fontSize: 17 }}>It's empty here</Text>


                            <Text style={{ top: '10%', fontSize: 15, color: 'grey' }}>You haven't saved any address yet.</Text>
                            <Text style={{ top: '10%', fontSize: 15, color: 'grey' }}>Click Add New Address to get started.</Text>


                        </View>

                        {/* End BgImage  View*/}


                        <TouchableOpacity onPress={() => this.props.navigation.navigate('GoogleMap')} style={{
                            position: 'absolute', right: '3%', bottom: '3%', backgroundColor: orange, height: 50, width: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>
                            <Icon style={{ color: 'white', fontSize: 30 }} type='Ionicons' name='add' />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%'
    },
});