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
    Item,
    Input,
    Textarea
} from 'native-base';

import { orange } from '../../ColorTheme/color';





export default class AddNewAddress extends Component {
    static navigationOptions = {
        drawerLabel: () => null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isSelected1: true,
            isSelected2: true,
            isSelected3: true

        };
    }


    render() {
        const { isSelected1, isSelected2, isSelected3 } = this.state;
        return (
            < View style={styles.container} >




                {/* Start Header View*/}

                <Header style={{ backgroundColor: orange }} noShadow>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('GoogleMap')} transparent>
                            <Icon style={{ color: 'white' }} type="AntDesign" name="arrowleft" />
                        </TouchableOpacity>
                    </Left>

                    <Body>
                        <Title style={{ color: 'white', fontWeight: 'bold' }}>Add a New Address</Title>
                    </Body>


                </Header>

                {/* End Header  View*/}


                <ScrollView>





                    <View style={styles.firstform}>
                        <Item regular>
                            <Input placeholder='Floor/Unit #' />
                        </Item>
                    </View>





                    <Form>
                        <Textarea rowSpan={5} bordered placeholder="Note to rider - e.g. landmark / building" />
                    </Form>






                    <Text style={styles.text}>Label as</Text>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10%' }}>

                        <TouchableOpacity onPress={() => this.setState({ isSelected1: !this.state.isSelected1 })} style={isSelected1 ? !this.state.isSelected1 : styles.button}>
                            <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '2%' }}>Home</Text>
                        </TouchableOpacity>



                        <TouchableOpacity onPress={() => this.setState({ isSelected2: !this.state.isSelected2 })} style={isSelected2 ? !this.state.isSelected2 : styles.button}>
                            <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '2%' }}>Work</Text>
                        </TouchableOpacity>



                        <TouchableOpacity onPress={() => this.setState({ isSelected3: !this.state.isSelected3 })} style={isSelected3 ? !this.state.isSelected3 : styles.button}>
                            <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: '2%' }}>Other</Text>
                        </TouchableOpacity>

                    </View>




                    <Button block style={{ backgroundColor: '#FFA800', marginTop: '5%', width: '95%', alignSelf: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: '3%' }}>SAVE AND CONTINUE</Text>
                    </Button>

                </ScrollView>

            </ View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F3F3F3',
    },
    firstform: {
        marginTop: '10%',
        width: '95%',
        alignSelf: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: '5%',
        marginTop: '5%'
    },
    button: {
        width: '20%',
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: '#FFA800',
        borderWidth: 1
    },

});