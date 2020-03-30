import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Title, Icon, Button, Item, Label, Input, } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'


export default class EditProfile extends Component {

    static navigationOptions = {
        drawerLabel: () => null,
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    async componentDidMount() {

        try {
            let uid = await AsyncStorage.getItem('uid');
            const formData = new FormData();


            formData.append("action", "show_by_user_id"),
                formData.append("id", uid);
            console.log("........", formData)

            axios.post('http://www.hnh5.xyz/delish/api/user.php', formData)
                .then(res => {
                    console.log("........", res)
                    this.setState({
                        id: res.data.data.id,
                        fname: res.data.data.first_name,
                        lname: res.data.data.last_name,
                        email: res.data.data.email,
                        number: res.data.data.contact_no
                    })
                });

        } catch (error) {
            console.log("wrong", error);

        }
    };


    onUpdate = async () => {
        const formData = new FormData();

        formData.append("action", "update_user"),
            formData.append("id", this.state.id);
        formData.append("first_name", this.state.fname),
            formData.append("last_name", this.state.lname),
            formData.append("email", this.state.email),
            formData.append("contact_no", this.state.number)
        await AsyncStorage.setItem('name', this.state.fname + ' ' + this.state.lname)
        this.props.navigation.navigate("AuthLoading")

        
        axios.post('http://www.hnh5.xyz/delish/api/user.php', formData)
            .then(res => {
                console.log('**********------', res)
                
            }).catch(err => {
                console.log("err => ", err);
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* Start Header View*/}

                    <Header style={{ backgroundColor: '#FF8A00' }} noShadow>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileInfo')} transparent>
                                <Icon style={{ color: 'white' }} type="Entypo" name="cross" />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Title style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Edit Profile</Title>
                        </Body>

                    </Header>

                    {/* End Header  View*/}







                    {/* Start Card  View*/}
                    <View style={{ width: '95%', backgroundColor: '#FFFF', marginTop: 20, alignSelf: 'center' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: '5%', marginTop: '5%' }}>Edit Profile</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>


                            <View style={{ marginLeft: '5%' }}>
                                <Item stackedLabel>
                                    <Label style={{ marginTop: '5%' }}>Username</Label>
                                    <Input style={{ width: '100%' }} onChangeText={(e) => { this.setState({ fname: e }) }} value={this.state.fname && this.state.fname} />
                                </Item>
                            </View>



                            <View style={{ marginLeft: '10%' }}>
                                <Item stackedLabel last>
                                    <Label style={{ marginTop: '5%' }}>Lastname</Label>
                                    <Input style={{ width: '100%' }} onChangeText={(e) => { this.setState({ lname: e }) }} value={this.state.lname && this.state.lname} />
                                </Item>
                            </View>


                        </View>


                        <View style={{ marginLeft: '5%' }}>
                            <Item stackedLabel last>
                                <Label style={{ marginTop: '5%' }}>Email Address</Label>
                                <Input style={{ width: '70%' }} onChangeText={(e) => { this.setState({ email: e }) }} value={this.state.email && this.state.email} />
                            </Item>
                        </View>



                        <View style={{ marginLeft: '5%' }}>
                            <Item stackedLabel last>
                                <Label style={{ marginTop: '5%' }}>Mobile number</Label>
                                <Input onChangeText={(e) => { this.setState({ number: e }) }} value={this.state.number && this.state.number} />
                            </Item>
                        </View>



                        <View style={{ alignSelf: 'flex-end', marginTop: '10%' }}>
                            <TouchableOpacity onPress={() => this.onUpdate()} style={{ width: 100, backgroundColor: '#FFA800', paddingVertical: 20, bottom: 20, marginTop: '2%' }}>
                                <Text style={{ fontWeight: 'bold', color: '#FFFF', textAlign: 'center' }}>UPDATE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* End Card  View*/}



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
        backgroundColor: '#F3F3F3',
    },

})