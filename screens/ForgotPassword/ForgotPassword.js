import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, Image, Keyboard, Animated, UIManager, TextInput, TouchableOpacity, ScrollView, Alert, } from 'react-native'
import { Container, Header, Content, Item, Input, Icon, Label, Form, Button, Left, List, ListItem, Right, Spinner } from 'native-base';
import CodeInput from 'react-native-confirmation-code-input';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import { orange } from '../color'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const { State: TextInputState } = TextInput;
const { width, height } = Dimensions.get("window")


export default class ForgotPassword extends Component {


    static navigationOptions = {
        drawerLabel: () => null,
    };



    constructor(props) {
        super(props)
        this.state = {
            shift: new Animated.Value(0),
            renderEMail: true,
            renderCode: false,
            renderPassword: false,
            email: "",
            code: "",
            password: "",
            newPassword: "",
            startDate: "",
            endDate: "",
            loader: false,
            keyboardPopup: false,
            resend: false,
            time: 60

        }
        //  this.refs.refname.
        //    const from = this.props.navigation.getParam("from")
    }

    componentDidMount() {
        this.dateTimer()
        // this.setState({ startDate: moment().toDate(), endDate:moment().add(1.5, "minute").toDate()})
    }


    dateTimer = () => {
        var that = this;
        console.log(moment(new Date()))
        //We are showing the coundown timer for a given expiry date-time
        //If you are making an quize type app then you need to make a simple timer
        //which can be done by using the simple like given below
        //that.setState({ totalDuration: 30 }); //which is 30 sec

        var date = moment(new Date())
            .utcOffset('+05:00')
            .format('YYYY-MM-DD hh:mm:ss');
        //Getting the current date-time with required formate and UTC   

        var expirydate = moment().add(1.5, "minute")
            .utcOffset('+05:00')
            .format('YYYY-MM-DD hh:mm:ss');//You can set your own date-time
        //Let suppose we have to show the countdown for above date-time 

        var diffr = moment.duration(moment(expirydate).diff(moment(date)));
        //difference of the expiry date-time given and current date-time

        var hours = parseInt(diffr.asHours());
        var minutes = parseInt(diffr.minutes());
        var seconds = parseInt(diffr.seconds());
        console.log(hours, minutes, seconds, date, expirydate)
        var d = hours * 60 * 60 + minutes * 60 + seconds;
        //converting in seconds
        that.setState({ totalDuration: d });
        //Settign up the duration of countdown in seconds to re-render
    }

    // componentWillMount() {
    //     this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    //     this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

    // }

    static navigationOptions = () => ({
        headerMode: 'none',
        headerVisible: false,
        header: null,
    })



    static navigationOptions = {
        drawerLabel: () => null,
    };


    codeMailFetch = async () => {

        this.setState({ loader: true })
        const { email, password } = this.state
        console.log("FIKHSDJKDFJSN")

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(email) === false) {
            this.setState({ loader: true })
            Alert.alert(
                "Alert", "Please Enter Valid Email Address",
                [
                    {
                        text: 'OK',
                        onPress: () => { this.setState({ loader: false }) }
                    }
                ],
                {
                    cancelable: false
                }
            );

        } else {



            const formData = new FormData();
            formData.append('action', "user_forget"),
                formData.append("email", email)

            console.log("email", email)
            console.log("button pressed continue wala")


            axios.post("http://www.hnh5.xyz/delish/api/forgot_password.php", formData)
                .then(res => {
                    console.log('*******', res);
                    console.log('*******', res.config);
                    console.log('*******', res.data.status);



                    var successData = res

                    if (successData.data.status === true) {
                        Alert.alert("Alert", "Verification code sent successfully")
                        this.setState({ loader: true })
                        this.setState({ renderEMail: false, renderCode: true, renderPassword: false, startDate: moment(), endDate: moment().add(1.5, "M"), loader: false })
                    } else {
                        Alert.alert("Alert", "Please Enter Valid Email Address")
                        this.setState({ loader: false })
                    }
                    // console.log("Alert", successData, successData.status, successData.data)
                })
                .catch(err => {
                    this.setState({ loader: false })
                    console.log("err err err", err)
                });
        }



    }




    static navigationOptions = {
        drawerLabel: () => null,
    };



    resendCode = () => {

        const { email } = this.state
        console.log("FIKHSDJKDFJSN")

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




        const formData = new FormData();
        formData.append('action', "user_forget"),
            formData.append("email", email)

        console.log("email", email)
        console.log("button pressed continue wala")


        axios.post("http://www.hnh5.xyz/delish/api/forgot_password.php", formData)
            .then(res => {
                console.log('*******', res);
                console.log('*******', res.config);
                console.log('*******', res.data.status);



                var successData = res

                if (res.data.status === true) {
                    Alert.alert("Alert", 'Verification code sent successfully')
                    this.countdown.state.until = 90
                    this.setState({ startDate: moment(), endDate: moment().add(1.5, "M"), resend: false, time: 90 })
                } else {
                    Alert.alert("Alert", res.data.message)
                    this.setState({ loader: false })
                }
                console.log("Alert", res, res.data.status, res.data)
            })
            .catch(err => {
                console.log("err err err", err)
            });

    }




    static navigationOptions = {
        drawerLabel: () => null,
    };


    codeChecker = async () => {
        const { email, code } = this.state
        this.setState({ loader: true })


        const formData = new FormData();
        formData.append("action", "user_reset_token")
        formData.append("reset_token", code)


        console.log("email, code", email, code)

        axios.post("http://www.hnh5.xyz/delish/api/password.php", formData)
            .then(res => {
                console.log('*******----', res);
                // console.log('*******', res.config);
                console.log('*********', res.data.status);

                if (res.data.status === true) {
                    // this.setState({ loader: false })
                    Alert.alert("Alert", "Code Matched")
                    this.setState({ renderEMail: false, renderCode: false, renderPassword: true, loader: false })
                } else {
                    Alert.alert("Alert", res.data.message)
                    this.setState({ loader: false })
                }
                // console.log("Alert", successData, successData.status, successData.data)
            })
            .catch(err => {
                console.log("err err err", err)
                this.setState({ loader: false })
            });
        // }


    }




    static navigationOptions = {
        drawerLabel: () => null,
    };


    changePassword = async () => {
        const { password, newPassword, email, code } = this.state
        this.setState({ loader: true })
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (password != newPassword) {
            this.setState({ loader: false })
            Alert.alert("Alert", "Password not Matched")
        } else {


            const formData = new FormData();
            formData.append("action", "reset_password")
            formData.append("email", email)
            formData.append("password1", password)
            formData.append("password2", newPassword)

            console.log("email, code, password", email, code, password, newPassword)

            axios.post("http://www.hnh5.xyz/delish/api/password.php", formData)
                .then(res => {
                    console.log('*******----', res);
                    // console.log('*******', res.config);
                    // console.log('*********', res.status);
                    console.log('*********', res.data);
                    console.log('*********', res.data.status);

                    if (res.data.status === true) {
                        this.setState({ loader: false })
                        Alert.alert("Alert", "Password Changed successfully")
                        this.props.navigation.navigate('AuthLoading')
                    } else {
                        this.setState({ loader: false })
                        Alert.alert("Alert", res.message)
                    }
                    console.log("Alert", res)
                })
                .catch(err => {
                    this.setState({ loader: false })
                    console.log("err err err", err)
                });
        }


    }




    static navigationOptions = {
        drawerLabel: () => null,
    };


    RenderEnterEmial = () => {
        return (
            <View>
                <View style={{ marginTop: "10%", alignContent: 'center', alignItems: "center", width: '100%' }}>
                    <Text style={{ fontFamily: "Poppins-Bold_0", fontSize: 22, fontWeight: '600' }}>Email Verification</Text>
                    <Text style={{ fontFamily: "Poppins-Regular", marginTop: "4%", width: '80%', textAlign: 'center', opacity: 0.6 }}>To reset your password, Please enter your email</Text>
                </View>

                <View style={{ marginTop: "10%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "90%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', paddingVertical: "3%", overflow: "hidden" }}>


                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', paddingVertical: 10 }} >
                        <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                            <Image source={require("../../Assets/Images/envelope.png")} style={{ height: 25, width: 25 }} />
                        </View>
                        <Item floatingLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                            <Label style={{ marginLeft: 3, color: 'lightgray', bottom: 10 }}>Email Address</Label>
                            <Input placeholderTextColor="gray" value={this.state.email} style={{ color: 'gray', width: '100%' }} onChangeText={(e) => { this.setState({ email: e }) }} />
                        </Item>
                    </View>





                    {/* // Text input box with icon aligned to the right */}
                </View>

                {!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "15%" }}>

                    <View style={{ width: "90%", backgroundColor: orange, borderRadius: 10 }}>
                        <TouchableOpacity onPress={this.codeMailFetch} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, width: '100%' }}>
                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 15, fontWeight: 'bold' }}>
                                CONTINUE
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View> : <Spinner color='#fc8b8c' />}


            </View>
        )
    }



    static navigationOptions = {
        drawerLabel: () => null,
    };



    RenderCode = () => {
        return (
            <View>
                <View style={{ marginTop: "10%", width: '100%', alignItems: 'center' }}>
                    <Text style={{ fontFamily: "Poppins-Bold_0", textAlign: "center", fontSize: 22 }}>Email Verification</Text>
                    <Text style={{ fontFamily: "Poppins-Regular", marginTop: "4%", textAlign: "center", width: '80%', opacity: 0.6 }}>To verify your email . Please Enter 4 digit code</Text>
                </View>

                <View style={{ marginTop: "10%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "90%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', paddingVertical: "4%", marginBottom: "5%", justifyContent: "center" }}>


                    <CodeInput
                        // ref="codeInputRef2"
                        // secureTextEntry
                        keyboardType="number-pad"
                        codeLength={4}
                        // compareWithCode='1234'
                        activeColor='rgba(49, 180, 4, 1)'
                        inactiveColor='rgba(49, 180, 4, 1.3)'
                        autoFocus={false}
                        ignoreCase={true}
                        inputPosition='center'
                        size={30}
                        onFulfill={(isValid) => { this.setState({ code: isValid }) }}
                        containerStyle={{ marginTop: 30 }}
                        codeInputStyle={{ borderWidth: 1.5, borderColor: "rgba(246, 232, 232, 0.7)", borderRadius: 5, color: "#000", marginLeft: 10 }}
                    />

                </View>



                <View style={{ flexDirection: "row", alignContent: "center", justifyContent: 'center' }}>

                    <View>
                        <Text style={{ alignSelf: "center", color: "gray", fontFamily: "Poppins-Regular", textAlign: "center", marginRight: 5 }}>
                            Code Expires in
                        </Text>
                    </View>

                    <View>
                        <CountDown
                            ref={ref => this.countdown = ref}

                            // style={{}}
                            until={this.state.time}
                            size={30}
                            onFinish={() => {
                                Alert.alert("Alert", 'Code Expired!')
                                this.setState({ resend: true })
                            }}
                            digitStyle={{ backgroundColor: 'transparent', height: 20, width: 20, marginTop: 0 }}
                            digitTxtStyle={{ color: 'gray', paddingLeft: 0, paddingRight: 0, fontSize: 15, fontWeight: null }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: null, s: null }}
                            showSeparator
                            separatorStyle={{ fontSize: 15 }}
                        />
                    </View>

                </View>

                <View style={{ marginTop: 10 }}>

                    {this.state.resend ? <View>
                        <TouchableOpacity onPress={() => { this.resendCode() }} style={{ marginLeft: "3%", marginBottom: "5%" }}>
                            <Text style={{ alignSelf: "center", color: "#fc8b8c", fontFamily: "Poppins-Regular", borderBottomWidth: 1, borderBottomColor: "#fc8b8c", fontWeight: 'bold' }}>Resend Code</Text>
                        </TouchableOpacity>
                    </View> :

                        <View>
                            <View style={{ marginLeft: "3%", marginBottom: "5%" }}>
                                <Text style={{ alignSelf: "center", color: "#fc8b8c", fontFamily: "Poppins-Regular", borderBottomWidth: 1, borderBottomColor: "#fc8b8c", fontWeight: 'bold' }}>Resend Code</Text>
                            </View>
                        </View>
                    }
                </View>

                {!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>

                    <View style={{ width: "90%", backgroundColor: orange, borderRadius: 10 }}>
                        <TouchableOpacity onPress={this.codeChecker} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, width: '100%' }}>
                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 15, fontWeight: 'bold' }}>
                                CONTINUE
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View> : <Spinner color='#fc8b8c' />}


            </View>
        )
    }



    static navigationOptions = {
        drawerLabel: () => null,
    };


    RenderChangePassword = () => {
        const from = this.props.navigation.getParam("from")
        return (
            <View>
                <View style={{ marginTop: "10%", alignSelf: 'center', alignItems: 'center', alignContent: "center", width: "100%" }}>
                    <Text style={{ fontFamily: "Poppins-Bold_0", textAlign: "center", fontSize: 22 }}>Change Password</Text>
                    <Text style={{ fontFamily: "Poppins-Regular", marginTop: "4%", opacity: 0.6, textAlign: "center", width: '80%' }}>Enter your new Password to Login Your Account</Text>
                </View>

                <View style={{ marginTop: "10%", alignContent: "center", alignSelf: "center", alignItems: "center", width: "90%", backgroundColor: "#fff", borderRadius: 10, shadowOpacity: 1, elevation: 4, shadowRadius: 20, shadowOffset: { width: 0, height: 13 }, shadowColor: 'rgba(46, 229, 157, 0.4)', paddingVertical: "1%", padding: "4%" }}>



                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >
                        <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                            <Image source={require("../../Assets/Images/lockopen.png")} style={{ height: 20, width: 15 }} />
                        </View>
                        <Item stackedLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                            <Label style={{ marginLeft: 3, color: 'lightgray' }}>Password</Label>
                            <Input secureTextEntry value={this.state.password} placeholder="*********" style={{ color: 'gray', width: '100%' }} onChangeText={(e) => { this.setState({ password: e }) }} />
                        </Item>
                    </View>


                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >
                        <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                            <Image source={require("../../Assets/Images/lockopen.png")} style={{ height: 20, width: 15 }} />
                        </View>
                        <Item stackedLabel style={{ width: '80%', borderBottomWidth: 0 }}>
                            <Label style={{ marginLeft: 3, color: 'lightgray' }}>Confirm Password</Label>
                            <Input secureTextEntry value={this.state.newPassword} placeholder="*********" style={{ color: 'gray', width: '100%' }} onChangeText={(e) => { this.setState({ newPassword: e }) }} />
                        </Item>
                    </View>





                    {/* // Text input box with icon aligned to the right */}
                </View>

                {!this.state.loader ? <View style={{ alignContent: "center", alignItems: "center", marginTop: "5%" }}>

                    <View style={{ width: "90%", backgroundColor: orange, borderRadius: 10 }}>
                        <TouchableOpacity onPress={this.changePassword} style={{ justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "none", opacity: 0.7, borderRadius: 10 }} style={{ flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", backgroundColor: "transparent", opacity: 0.7, borderRadius: 10, width: '100%' }}>
                            <Text style={{ alignSelf: "center", textAlignVertical: "center", color: "#fff", fontFamily: "Poppins-Regular", paddingVertical: 15, fontWeight: 'bold' }}>
                                Submit
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View> : <Spinner color='#fc8b8c' />}


            </View>
        )
    }



    static navigationOptions = {
        drawerLabel: () => null,
    };


    render() {
        const { renderCode, renderEMail, renderPassword, email, code, password, newPassword } = this.state
        // console.log("totalDuration", Keyboard)

        return (
            <View style={{ flex: 1, height: '100%', width: '100%', marginTop: -80 }}>

                <ScrollView keyboardShouldPersistTaps="always" style={{
                }}>
                    <Animated.View style={[{ justifyContent: 'center', alignItems: "center" }, { transform: [{ translateY: this.state.shift }] }]} >
                        <View style={{ marginTop: 100 }}>


                            {renderEMail && <this.RenderEnterEmial />}
                            {renderPassword && <this.RenderChangePassword />}
                            {renderCode && <this.RenderCode />}
                            {/* <this.RenderChangePassword /> */}





                        </View>
                    </Animated.View>
                </ScrollView>

            </View>
        )
    }

    // componentWillUnmount() {
    //     this.keyboardDidShowSub.remove();
    //     this.keyboardDidHideSub.remove();
    // }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 1000,
                    useNativeDriver: true,
                }
            ).start();
        });
        this.setState({ keyboardPopup: true })
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
        this.setState({ keyboardPopup: false })

    }
}
