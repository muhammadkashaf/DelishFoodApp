import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { View, Icon } from 'native-base';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import AsyncStorage from '@react-native-community/async-storage';



import SignIn from '../Authentication/Login/Login';
import SignUp from '../Authentication/Signup/Signup';
import SignUpWithEmail from '../Authentication/SignUpWithEmail/SignUpWithEmail';
import ForgotPassword from '../Authentication/ForgotPassword/ForgotPassword';


import AuthLoadingScreen from '../../screens/AuthLoading/AuthLoading';


import Home from '../Dashboard/Home/Home';
import OfferandDeals from '../Dashboard/OffersandDeals/OffersandDeals';
import Filter from '../Dashboard/Filter/filter';
import MyOrders from '../Dashboard/MyOrders/MyOrders';
import HelpCenter from '../Dashboard/HelpCenter/HelpCenter';
import InviteFriends from '../Dashboard/InviteFriends/InviteFriends';
import TermsandConditions from '../Dashboard/TermsandConditions/TermsandConditions';
import ProfileInfo from '../Dashboard/ProfileInfo/ProfileInfo';
import DelishPay from '../Dashboard/DelishPay/Delishpay';
import EditProfile from '../Dashboard/EditProfile/EditProfile';
import MyAddress from '../Dashboard/My addresses/Myaddresses';
import GoogleMap from '../Dashboard/GoogleMap/GoogleMap';
import AddNewAddress from '../Dashboard/AddNewAddress/AddNewAddress';
import MyVoucher from '../Dashboard/MyVouchers/MyVoucher';







class DrawerComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

    }




    async componentDidMount() {
        let name = await AsyncStorage.getItem('name');
        this.setState({
            name: name
        })
    }





    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    };






    render() {

        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} >

                <View>

                    <DrawerNavigatorItems {...this.props} />

                    <View style={{ width: '100%', backgroundColor: 'orange', paddingTop: '40%', paddingBottom: '8%', marginTop: -10 }}>
                        <Text style={{ marginLeft: '5%', fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>{this.state.name}</Text>
                    </View>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DelishPay')}>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={{ marginLeft: '5%', fontSize: 17, fontWeight: 'bold', color: 'orange' }}>DelishPay</Text>
                        </View>
                        <View style={{ marginTop: '2%' }}>
                            <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: 'bold' }}>Credit and payment methods</Text>
                        </View>
                    </TouchableOpacity>



                    <View style={{ flexDirection: 'column', paddingLeft: '8%', paddingTop: '10%', borderBottomWidth: 1, borderBottomColor: 'gray', }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyOrders')}>
                            <View style={{ flexDirection: 'row' }} >
                                <View style={{ paddingRight: '13%', paddingBottom: '10%' }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='first-order' type='FontAwesome' />
                                </View>
                                <View style={{ marginRight: '9%' }}>
                                    <Text style={{ fontSize: 18, }}>My orders</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileInfo')}>
                            <View style={{ flexDirection: 'row' }} >
                                <View style={{ paddingRight: '13%', paddingBottom: '10%' }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='profile' type='AntDesign' />
                                </View>
                                <View style={{ marginRight: '9%' }}>
                                    <Text style={{ fontSize: 18, }}>My profile</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyAddress')}>
                            <View style={{ flexDirection: 'row' }} >
                                <View style={{ paddingRight: '13%', paddingBottom: '10%' }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='address' type='Entypo' />
                                </View>
                                <View style={{ marginRight: '9%' }}>
                                    <Text style={{ fontSize: 18, }}>My addresses</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyVoucher')}>
                            <View style={{ flexDirection: 'row' }} >
                                <View style={{ paddingRight: '13%', paddingBottom: '10%' }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='gift' type='FontAwesome' />
                                </View>
                                <View style={{ marginRight: '9%' }}>
                                    <Text style={{ fontSize: 18, }}>My vouchers</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpCenter')}>
                            <View style={{ flexDirection: 'row' }} >
                                <View style={{ paddingRight: '10%', paddingBottom: '10%' }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='hands-helping' type='FontAwesome5' />
                                </View>
                                <View style={{ marginRight: '9%' }}>
                                    <Text style={{ fontSize: 18, }}>Helps center</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('InviteFriends')}>
                            <View style={{ flexDirection: 'row', }} >
                                <View style={{ paddingRight: '10%', paddingBottom: '10%', }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='user-friends' type='FontAwesome5' />
                                </View>
                                <View style={{ marginRight: '18%' }}>
                                    <Text style={{ fontSize: 18, }}>Invite friends</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingLeft: '8%', marginTop: '10%' }}>
                        <TouchableOpacity onPress={() => alert('coming soon')}>
                            <View style={{ marginBottom: '4%' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Settings</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TermsandConditions')}>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Terms & Conditions/Privacy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.signOutAsync()} style={{ flexDirection: 'row', padding: 15, marginLeft: '5%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }} >Logout</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )

    }
}








class initialDrawer extends React.Component {

    render() {

        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} >

                <View>

                    <DrawerNavigatorItems {...this.props} />


                    <View style={{ width: '100%', backgroundColor: 'orange', paddingTop: '60%', paddingBottom: '8%', marginTop: -10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')} style={{ height: 10, width: '100%' }} >
                            <Text style={{ paddingLeft: '5%', fontSize: 16, color: 'white', }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', backgroundColor: 'orange', paddingBottom: '8%' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} style={{ height: 10, width: '100%' }} >
                            <Text style={{ paddingLeft: '5%', fontSize: 16, color: 'white', }}>Create account</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', paddingLeft: '8%', paddingTop: '10%', borderBottomWidth: 1, borderBottomColor: 'gray', }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyOrders')}>
                            <View style={{ flexDirection: 'row' }} >
                                <View style={{ paddingRight: '13%', paddingBottom: '10%' }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='first-order' type='FontAwesome' />
                                </View>
                                <View style={{ marginRight: '9%' }}>
                                    <Text style={{ fontSize: 18, }}>My orders</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpCenter')}>
                            <View style={{ flexDirection: 'row' }} >
                                <View style={{ paddingRight: '10%', paddingBottom: '10%' }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='hands-helping' type='FontAwesome5' />
                                </View>
                                <View style={{ marginRight: '9%' }}>
                                    <Text style={{ fontSize: 18, }}>Helps center</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('InviteFriends')}>
                            <View style={{ flexDirection: 'row', }} >
                                <View style={{ paddingRight: '10%', paddingBottom: '10%', }}>
                                    <Icon style={{ color: 'orange', fontSize: 22 }} name='user-friends' type='FontAwesome5' />
                                </View>
                                <View style={{ marginRight: '18%' }}>
                                    <Text style={{ fontSize: 18, }}>Invite friends</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingLeft: '8%', marginTop: '10%' }}>
                        <TouchableOpacity>
                            <View style={{ marginBottom: '4%' }}>
                                <Text style={{ fontSize: 18, }}>Setting</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TermsandConditions')}>
                            <View>
                                <Text style={{ fontSize: 16, }}>Terms & Conditions/Privacy</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                </View>


            </SafeAreaView>
        )

    }
}




const DrawerNavigator = createDrawerNavigator({
    Home: Home,
    SignIn: SignIn,
    SignUp: SignUp,
    SignUpWithEmail: SignUpWithEmail,
    ForgotPassword: ForgotPassword,
    Filter: Filter,
    MyOrders: MyOrders,
    HelpCenter: HelpCenter,
    InviteFriends: InviteFriends,
    TermsandConditions: TermsandConditions,
    ProfileInfo: ProfileInfo,
    DelishPay: DelishPay,
    EditProfile: EditProfile,
    MyAddress: MyAddress,
    GoogleMap: GoogleMap,
    AddNewAddress: AddNewAddress,
    OfferandDeals: OfferandDeals,
    MyVoucher: MyVoucher

},
    {
        contentComponent: DrawerComponent,

        contentOptions: {
            labelStyle: {

            }
        }
    }
);



const AuthStackNavigator = createDrawerNavigator({
    Home: Home,
    SignIn: SignIn,
    SignUp: SignUp,
    SignUpWithEmail: SignUpWithEmail,
    ForgotPassword: ForgotPassword,
    Filter: Filter,
    MyOrders: MyOrders,
    HelpCenter: HelpCenter,
    InviteFriends: InviteFriends,
    TermsandConditions: TermsandConditions,
    ProfileInfo: ProfileInfo,
    DelishPay: DelishPay,
    EditProfile: EditProfile,
    MyAddress: MyAddress,
    GoogleMap: GoogleMap,
    AddNewAddress: AddNewAddress,
    OfferandDeals: OfferandDeals,
    MyVoucher: MyVoucher
},
    {
        contentComponent: initialDrawer,

        contentOptions: {
            labelStyle: {


            }
        }
    }

);


const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: DrawerNavigator,
});



export default createAppContainer(SwitchNavigator);