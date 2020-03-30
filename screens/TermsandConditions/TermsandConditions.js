import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Title, Icon } from 'native-base';
import { orange } from '../color';

export default class TermsandConditions extends Component {
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
                        <TouchableOpacity transparent onPress={() => this.props.navigation.navigate('AuthLoading')}>
                            <Icon style={{ color: 'white' }} name="arrow-back" />
                        </TouchableOpacity>
                    </Left>

                    <Body>
                        <Title style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Terms & Conditions</Title>
                    </Body>


                </Header>

                {/* End Header  View*/}


                <ScrollView>



                    <View style={{ marginTop: '2%', marginLeft: '5%', marginRight: '5%' }}>
                        <Text>Published: 2020</Text>
                    </View>



                    <View>
                        <Text style={{ marginTop: '5%', fontWeight: 'bold', marginLeft: '5%', marginRight: '5%' }}>TERMS OF USE</Text>
                    </View>


                    <View style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
                        <Text>These Terms of Use<Text style={{ fontWeight: 'bold' }}>(“Terms”)</Text> govern your use of the websites and mobile applications provided by foodpanda <Text style={{ fontWeight: 'bold' }}></Text><Text style={{ fontWeight: 'bold' }}>(or referred to as “us”)</Text> <Text style={{ fontWeight: 'bold' }}>(collectively the “Platforms”).</Text>> Please read these Terms carefully. By accessing and using the Platforms, you agree that you have read, understood and accepted the Terms including any additional terms and conditions and any policies referenced herein, available on the Platforms or available by hyperlink. If you do not agree or fall within the Terms, please do not use the Platforms.</Text>

                    </View>



                    <View style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
                        <Text>The Platforms may be used by (i) natural persons who have reached 18 years of age and (ii) corporate legal entities, e.g companies. Where applicable, these Terms shall be subject to country-specific provisions as set out herein. </Text>
                    </View>



                    <View style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
                        <Text>Users below the age of 18 must obtain consent from parent(s) or legal guardian(s), who by accepting these Terms shall agree to take responsibility for your actions and any charges associated with your use of the Platforms and/or purchase of Goods. If you do not have consent from your parent(s) or legal guardian(s), you must stop using/accessing the Platforms immediately. </Text>
                    </View>


                    <View style={{ marginTop: '5%', marginLeft: '5%', marginRight: '5%' }}>
                        <Text>foodpanda reserves the right to change or modify these Terms (including our policies which are incorporated into these Terms) at any time. You are strongly recommended to read these Terms regularly. You will be deemed to have agreed to the amended Terms by your continued use of the Platforms following the date on which the amended Terms are posted.</Text>
                    </View>

                </ScrollView >

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
})