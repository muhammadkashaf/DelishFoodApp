import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,} from 'react-native';
import {Icon,Button, Radio} from 'native-base';
import Modal from "react-native-modal";



export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
    
    
  }
  
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
 
  
  render() {
    return (
      <View >
          <View style={{flexDirection:"row",justifyContent:"flex-start",height:50,backgroundColor:"pink"}}>
          <Icon name="arrowleft" type="AntDesign" style={{paddingLeft:6,paddingTop:8,color:"white"}}/>
          <Text style={{fontWeight:"bold",fontSize:20,paddingTop:10,paddingLeft:50,color:"white"}}> Settings</Text>
          </View>

          <View style={{backgroundColor:"gray",width:"96%",height:100,paddingTop:10,marginTop:10,marginLeft:7}}>
          <View style={{flexDirection:"row"}}>
          <Text style={{color:"black",paddingLeft:20,paddingTop:10,fontSize:16}}>Language</Text>


          <TouchableOpacity onPress={this.toggleModal}>
          <Text style={{color:"pink",paddingLeft:190,paddingTop:10,}}>Edit</Text>
          <Modal isVisible={this.state.isModalVisible} style={{maxHeight:400,width:200,marginLeft:90}}>


            
          <View style={{ flex: 1 ,flexDirection:"column",backgroundColor:"pink"}}>
           <Text   style={{
                  borderBottomColor: 'gray',borderBottomWidth: 1,width:"100%",textAlign:"center",paddingTop:4,fontWeight:"700"}}>Select Language</Text>
           
           <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around",paddingRight:90}}><Radio  color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Bengali</Text></View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:90}}><Radio   color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Behari </Text></View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:90}}><Radio   color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Urdu </Text></View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:90}}><Radio   color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Pashto </Text></View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:90}}><Radio   color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Sindhi </Text></View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:90}}><Radio   color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Balochi </Text></View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:90}}><Radio   color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Punjabi</Text></View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:90}}><Radio   color={"#f0ad4e"} selectedColor={"#5cb85c"} onPress={this.toggleModal}/>
            <Text> Balti </Text></View>

          
           <View style={{flexDirection:"row",paddingTop:130}}>
           <Text style={{paddingLeft:60,paddingRight:10}}>CANCEL</Text>
           <Text>SELECT</Text></View>
           
            
          </View>
        </Modal>
          </TouchableOpacity>
          
          
        </View>
        <View><Text style={{paddingLeft:21,paddingTop:10,fontSize:16,fontWeight:"bold"}}>English</Text></View>
        </View>
          
        <View style={{flexDirection:"row",height:60,width:"96%",backgroundColor:"gray",marginTop:10,marginLeft:7}}>
          <Icon name="checksquare" type="AntDesign" style={{paddingLeft:8,paddingTop:12,color:"pink"}}/>
          <Text style={{paddingLeft:10,paddingTop:16,fontSize:16,}}>Receive Special Offers</Text>
        </View>

        <View style={{flexDirection:"row",height:60,width:"96%",backgroundColor:"gray",marginTop:10,marginLeft:7}}>
          <Icon name="checksquare" type="AntDesign" style={{paddingLeft:8,paddingTop:12,color:"pink"}}/>
          <Text style={{paddingLeft:10,paddingTop:16,fontSize:16,}}>Get updates on your order status!</Text>
        </View>

        
         <Text style={{paddingLeft:100,paddingTop:30,fontSize:15}}>Version: 5.13.0 (272038)</Text>
      </View>
    );
  }
}
