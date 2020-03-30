import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { Header, Left, Body, Title, Icon, Button, Form, Item, Input, Label } from 'native-base';
import Menu, { MenuItem } from 'react-native-material-menu';
import { orange } from '../color';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

export default class ProfileInfo extends Component {


    static navigationOptions = {
        drawerLabel: () => null,
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            name: '',
            email: '',
            contact: ''

        };

        _menu = null;

        setMenuRef = ref => {
            this._menu = ref;
        };

    }



    async componentDidMount() {

        try {
            let uid = await AsyncStorage.getItem('uid');
            const formData = new FormData();


            formData.append("action", "show_by_user_id"),
                formData.append("id", uid)

            let data = {
                action: "show_by_user_id",
                id: uid
            };
            axios.post('http://www.hnh5.xyz/delish/api/user.php', formData)
                .then(res => {
                    this.setState({
                        id: res.data.data.id,
                        name: res.data.data.first_name + ' ' + res.data.data.last_name,
                        email: res.data.data.email,
                        contact: res.data.data.contact_no,

                    })
                }).catch(err => {
                    console.log("err => ", err);
                });

        } catch (error) {
            console.log("wrong", error);

        }
    }






    render() {

        const { _menu } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* Start Header View*/}

                    <Header style={{ backgroundColor: orange }} noShadow>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')} transparent>
                                <Icon style={{ color: 'white' }} type="Entypo" name="cross" />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Title style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Profile Info</Title>

                        </Body>

                        <TouchableOpacity>
                            <Menu
                                ref={(ref) => this.menu = ref}
                                button={<Icon onPress={() => {
                                    this.menu.show()


                                }} style={{ fontSize: 20, color: '#FFFF', marginTop: 20 }} name="dots-vertical" type="MaterialCommunityIcons" />}
                            >
                                <MenuItem onPress={() => {
                                    this.setState({ isVisible: true })
                                    this.menu.hide()
                                }} >Change Password</MenuItem>

                            </Menu>
                        </TouchableOpacity>

                    </Header>


                    {/* End Header  View*/}








                    {/* Start Card View*/}

                    <View style={{ width: '95%', backgroundColor: '#FFFF', marginTop: 20, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: '5%', marginTop: 20 }} > Contact Info</Text>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
                                <Text style={{ fontWeight: 'bold', color: '#FFA800', fontSize: 15, marginRight: '5%', marginTop: 20 }}>EDIT</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ marginTop: 20, paddingVertical: 10 }}>
                            <Text style={{ marginLeft: '5%' }}>{this.state.name}</Text>

                            <Text style={{ marginLeft: '5%', marginTop: '3%' }}>{this.state.email}</Text>

                            <Text style={{ marginLeft: '5%', marginTop: '3%' }}>{this.state.contact}</Text>
                        </View>


                    </View>

                    {/* End Header View*/}



                    <Modal
                        animationType={"fade"}
                        transparent={true}

                        visible={this.state.isVisible}

                        onRequestClose={() => { this.setState({ isVisible: false }) }}>
                        {/*All views of Modal*/}
                        <View style={styles.modal}>
                            <Text style={styles.text}>Change Password</Text>



                            <Form>
                                <Item floatingLabel>
                                    <Label>Enter New Password</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Confirm Password</Label>
                                    <Input />
                                </Item>
                            </Form>



                            <View style={{ alignSelf: 'flex-end', marginTop: '10%' }}>
                                <TouchableOpacity style={{ marginRight: '5%', width: 100, backgroundColor: '#FFA800', paddingVertical: 20, bottom: 20, marginTop: '2%' }}>
                                    <Text onPress={() => { this.setState({ isVisible: false }) }} style={{ fontWeight: 'bold', color: '#FFFF', textAlign: 'center', }}>CANCEL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginRight: '5%', width: 100, backgroundColor: '#FFA800', paddingVertical: 20, bottom: 20, marginTop: '2%' }}>
                                    <Text onPress={() => { this.setState({ isVisible: false }) }} style={{ fontWeight: 'bold', color: '#FFFF', textAlign: 'center', }}>UPDATE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>



                </ScrollView>

            </View >
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
    modal: {

        backgroundColor: "white",
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 80,
        marginLeft: 40,

    },
    text: {
        marginTop: '10%',
        marginLeft: '5%',
        fontSize: 20,
        fontWeight: 'bold',
    }

})