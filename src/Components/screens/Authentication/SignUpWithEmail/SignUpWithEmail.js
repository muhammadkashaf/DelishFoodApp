import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    Alert
} from 'react-native';

import {
    Header,
    Left,
    Body,
    Title,
    Icon,
    Button,
    Item,
    Spinner
} from 'native-base';

import axios from 'axios';

import { orange } from '../../ColorTheme/color';





export default class SignUpWithEmail extends Component {

    static navigationOptions = {
        drawerLabel: () => null,
    };

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            password: '',

            loader: false,

            hidePassword: true,


            fname: false,
            lname: false,
            emailErr: false,
            phoneErr: false,
            passwordErr: false,

        };
    }




    checkField = (key) => {
        if (key == "password") {
            if (this.state.password.length > 5) {
                this.setState({ passwordErr: false })
            }
            else {
                this.setState({ passwordErr: true })
            }
        } else {
            if (!this.state[key]) {
                this.setState({
                    [`${key}Err`]: true
                })
            } else {
                this.setState({
                    [`${key}Err`]: false
                })
            }
        }
    }




    signUp = () => {
        this.setState({ loader: true })

        const { email, password, fname, lname, phone } = this.state

        console.log("SIGN UP jksdajkfajkshjghj")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email && password && phone && fname.length >= 5 && lname.length >= 5 && phone.length > 7) {
            if (reg.test(email) === false) {
                this.setState({ loader: false })
                Alert.alert("Alert", "Please Enter Valid Email Address")
            } else {
                let obj = {
                    "action": "add_user",
                    "role_id": 2,
                    "email": email,
                    "password": password,
                    "first_name": fname,
                    "last_name": lname,
                    "contact_no": phone
                }
                const formData = new FormData();


                formData.append("action", "add_user"),
                    formData.append("role_id", 2),
                    formData.append("email", email.toLowerCase()),
                    formData.append("password", password),
                    formData.append("first_name", fname),
                    formData.append("last_name", lname),
                    formData.append("contact_no", phone),



                    console.log("********************************", obj);



                axios.post("http://www.hnh5.xyz/delish/api/user.php", formData)
                    .then(response => {

                        console.log(response);


                        if (response.data.status) {
                            Alert.alert("Alert", "Signup successful")
                            this.setState({ loader: true })
                            this.props.navigation.navigate("SignIn")
                        }
                        else {
                            this.setState({ loader: false })
                            Alert.alert("Error", response.data.message)

                        }
                        console.log("Alert", res, res.status, res.data)

                    })
                    .catch(err => console.log("*-*-*-*", err))


            }
        } if (!email) {
            this.setState({ emailErr: true, loader: false })
        } if (!fname || fname.length < 5) {
            this.setState({ fnameErr: true, loader: false })
        } if (!lname) {
            this.setState({ lnameErr: true, loader: false })
        } if (!phone || phone.length < 8) {
            this.setState({ phoneErr: true, loader: false })
        }
        if (password.length < 6) {
            this.setState({ passwordErr: true, loader: false })
        }
    }




    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }



    render() {
        const { action, role_id, email, password, fname, lname, phone, loader, emailErr, passwordErr, fnameErr, lnameErr, phoneErr } = this.state;
        console.log(email, password, fname, lname, phone)

        return (
            <View style={styles.container}>



                {/* Start Header View*/}

                <Header style={{ backgroundColor: '#F3F3F3' }} noShadow>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} transparent>
                            <Icon style={{ color: orange, left: '5%' }} type="Entypo" name="cross" />
                        </TouchableOpacity>
                    </Left>

                    <Body>
                        <Title style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Sign up</Title>
                    </Body>


                </Header>

                {/* End Header  View*/}







                <View style={{ flex: 1 }}>
                    <ScrollView>

                        <View style={{ flex: 1, alignItems: 'center' }}>


                            {/* Start 2nd  View*/}


                            <View style={styles.textinputView}>

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '40%' }}>



                                        <Item error={fnameErr}>
                                            <View style={{ marginTop: '2%', width: '80%' }}>
                                                <TextInput onChangeText={(e) => { this.setState({ fname: e }) }} onBlur={() => this.checkField("fname")} placeholder="First Name" />
                                            </View>
                                        </Item>
                                        {fnameErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >FirstName is required</Text>}

                                    </View>




                                    <View style={{ width: '40%', marginLeft: '5%' }}>

                                        <Item error={lnameErr}>

                                            <View style={{ marginTop: '2%' }}>
                                                <TextInput onChangeText={(e) => { this.setState({ lname: e }) }} onBlur={() => this.checkField("lname")} placeholder="Last Name" />
                                            </View>
                                        </Item>
                                        {lnameErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end' }} >LastName is required</Text>}

                                    </View>


                                </View>
                            </View>



                            <Item error={emailErr}>
                                <View style={{ marginTop: '2%', width: '80%' }}>
                                    <TextInput onBlur={() => this.checkField("email")} onChangeText={(e) => { this.setState({ email: e }) }} placeholder="Email Address" />
                                </View>
                            </Item>

                            {emailErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end', marginRight: '10%' }} >Email address is required</Text>}


                            <Item error={phoneErr}>
                                <View style={{ marginTop: '2%', width: '80%' }}>
                                    <TextInput keyboardType='numeric' onBlur={() => this.checkField("phone")} onChangeText={(e) => { this.setState({ phone: e }) }} placeholder="Phone Number" placeholder="Mobile" />
                                </View>
                            </Item>
                            {phoneErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end', marginRight: '10%' }} >Phone number must be greater than 7 digits</Text>}




                            <Item error={passwordErr}>
                                <View style={{ marginTop: '2%', width: '80%' }}>
                                    <TextInput onBlur={() => this.checkField("password")} onChangeText={(e) => { this.setState({ password: e }) }} placeholder="Password" secureTextEntry={this.state.hidePassword} onChangeText={(value) => this.setState({ password: value })} style={styles.textBox} />
                                    <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
                                        <Image source={(this.state.hidePassword) ? require('../../../../Assets/Images/hide.png') : require('../../../../Assets/Images/view.png')} style={styles.buttonImage} />
                                    </TouchableOpacity>
                                </View>
                            </Item>

                            {passwordErr && <Text style={{ color: 'red', fontSize: 12, alignSelf: 'flex-end', marginRight: '10%' }} >Password length must be greater than 6 digits</Text>}





                            {!loader ?

                                <View style={{ marginTop: '5%', alignItems: 'center' }}>
                                    <Button onPress={this.signUp} style={{ backgroundColor: orange, width: '40%' }}>
                                        <Text style={{ color: 'white', marginLeft: '5%' }}>JOIN NOW </Text>
                                    </Button>
                                </View>

                                :

                                <Spinner color="#fc8b8c" />

                            }

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                                <Text style={styles.text}>Already a member?</Text>
                            </TouchableOpacity>


                            {/* End 2nd  View*/}
                        </View>


                    </ScrollView>
                </View >
            </View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F3F3F3',
    },
    textinputView: {
        display: 'flex',
        marginTop: '1%',
        width: '80%',


    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: '10%'
    },
    touachableButton: {
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 2
    },
    buttonImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    }
})