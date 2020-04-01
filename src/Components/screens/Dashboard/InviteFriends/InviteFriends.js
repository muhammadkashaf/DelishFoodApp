import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';

import { Icon } from 'native-base';
import Share from 'react-native-share';

import { orange } from '../../ColorTheme/color';








export default class InviteFriends extends Component {
    static navigationOptions = {
        drawerLabel: () => null,
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    share = () => {
        const shareOptions = {
            title: 'Share via',
            message: 'https://delish.app.link/P348ijn2k4',

        };

        Share.open(shareOptions);
    }




    render() {


        return (
            <ScrollView style={styles.container}>

                <View style={styles.coverImageContainer}>
                    <ImageBackground
                        style={styles.coverImage}
                        source={require('../../../../Assets/Images/bg.png')}
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLoading')}>
                            <Icon style={styles.icon} type="Entypo" name="cross" />
                        </TouchableOpacity>
                    </ImageBackground>

                </View>





                <View style={styles.subView}>
                    <Text style={styles.subViewText}>SHARE THE DELISH LOVE</Text>
                </View>





                <Text style={styles.fText}>Give your friends 300Rs. off their first order and you'll get </Text>
                <Text style={styles.fSubText}>300Rs. off too when they use it</Text>


                <TouchableOpacity>
                    <Text style={styles.sText}>Refreral Terms & Conditions</Text>
                </TouchableOpacity>


                <Text style={styles.tText}>Share your link</Text>





                <View style={styles.ViewContainer}>

                    <View style={{ backgroundColor: 'white', width: '70%', marginLeft: '10%' }}>
                        <Text style={{ textAlign: 'center', paddingVertical: '5%' }}>https://delish.app.link/P348ijn2k4</Text>
                    </View>


                    <TouchableOpacity onPress={this.share} style={{ backgroundColor: 'white', width: '10%', marginLeft: '5%' }}>
                        <Icon style={{ alignSelf: 'center', top: 5 }} name='sharealt' type='AntDesign' />
                    </TouchableOpacity>
                </View>




            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        flex: 1,
    },

    coverImageContainer: {
        backgroundColor: '#000',
    },

    coverImage: {
        width: null,
        height: 170,
        resizeMode: 'cover',
        opacity: 0.7,
        flex: 1,
    },
    icon: {
        color: 'white',
        paddingTop: '5%',
        left: '5%',
        fontSize: 25,
        color: orange,
    },
    subView: {
        width: '100%',
        backgroundColor: 'white',
        paddingVertical: '5%',
    },
    subViewText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    fText: {
        paddingTop: '5%',
        fontWeight: 'normal',
        textAlign: 'center',
        fontSize: 13,
    },
    fSubText: {
        paddingTop: '2%',
        fontWeight: 'normal',
        textAlign: 'center',
        fontSize: 13,
    },

    sText: {
        paddingTop: '5%',
        fontWeight: 'normal',
        color: orange,
        textAlign: 'center',
    },
    tText: {
        paddingTop: '5%',
        fontWeight: 'normal',
        textAlign: 'center',
        fontSize: 13,
    },
    ViewContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: '3%',
    },
});
