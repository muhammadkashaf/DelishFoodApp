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
    Card,
    CardItem,
} from 'native-base';

import { orange } from '../../ColorTheme/color';





export default class HelpCenter extends Component {

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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')} transparent>
                            <Icon style={{ color: 'white' }} type="Entypo" name="cross" />
                        </TouchableOpacity>
                    </Left>

                    <Body>
                        <Title style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Help Center</Title>
                    </Body>


                </Header>

                {/* End Header  View*/}



                <ScrollView>





                    {/* Start Card View*/}

                    <View>
                        <Card style={{ marginTop: '5%', width: '95%', alignSelf: 'center' }} >

                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: orange, marginLeft: '5%', marginTop: '5%' }}>How can we help?</Text>

                            <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon active type="MaterialCommunityIcons" name="account" />
                                <Text style={{ marginRight: '40%' }}>Account</Text>
                                <TouchableOpacity><Icon style={{ fontSize: 20, color: orange, }} name="right" type="AntDesign" /></TouchableOpacity>
                            </CardItem>


                            <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon active type="MaterialIcons" name="payment" />
                                <Text style={{ marginRight: '40%' }}>Payment</Text>
                                <TouchableOpacity><Icon style={{ fontSize: 20, color: orange, }} name="right" type="AntDesign" /></TouchableOpacity>
                            </CardItem>




                            <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon active type="Entypo" name="ticket" />

                                <Text style={{ marginRight: '40%' }}>Vouchers</Text>
                                <TouchableOpacity><Icon style={{ fontSize: 20, color: orange, }} name="right" type="AntDesign" /></TouchableOpacity>

                            </CardItem>



                            <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon active type="MaterialIcons" name="question-answer" />

                                <Text style={{ marginRight: '50%' }}>FAQ</Text>
                                <TouchableOpacity><Icon style={{ fontSize: 20, color: orange, }} name="right" type="AntDesign" /></TouchableOpacity>

                            </CardItem>
                        </Card>



                        {/* End Card  View*/}


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
        backgroundColor: '#F3F3F3',
    },

})