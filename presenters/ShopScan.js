import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import TitleBar from '../views/components/TitleBar'
import QRScanner from '../views/components/QRScanner'
import Input from '../views/components/Input'
import RedButton from '../views/components/RedButton'
import Line from '../views/components/Line'
import ExternalStyle from '../views/styles/ExternalStyle'

class ShopScan extends Component {
  state = {

  }
  func1 = () => {
    alert("hehe");
  }
   render() {
      return (
         <View style = {styles.container}>
            <TitleBar/>
            <Text style = {styles.text}>Total Amount : </Text>
            <Input placeholder="Total Amount" password={false} handleInput={this.handleEmail}/>
            <Text style = {styles.text}>Customer Account : #7439143 </Text>
            <RedButton
              buttonStyles = {ExternalStyle.submitButton}
              buttonTextStyles = {ExternalStyle.submitButtonText}
              buttonHandle= {this.func1}
              buttonText = "Scan QR Code"
              />
            <QRScanner/>
            <Line/>
            <View  style = {styles.cashOut}>
            <RedButton
              buttonStyles = {styles.cashOutButton}
              buttonTextStyles = {styles.cashOutButtonText}
              buttonText = "Cash Out"
              buttonHandle = {this.func1} />
            </View>

         </View>
      )
   }
}
export default ShopScan

const styles = StyleSheet.create({

   container: {
      flex : 1,
   },
   text : {
     fontSize : 23,
     fontWeight: 'bold',
     paddingLeft :30,
     paddingTop :30,
   },
   line: {
      borderBottomColor: '#ede7f6',
      borderBottomWidth: 3,
      marginLeft:20,
      marginRight:20,
   },
   cashOutButton : {
     backgroundColor: '#3031D6',
     paddingTop: 15,
     margin: 30,
     borderRadius : 8,
     height: 100,
     width : 250,
   },
   cashOutButtonText:{
      color: 'white',
      textAlign: 'center',
      fontSize : 30,
      fontWeight : 'bold',
      paddingTop : 15,
   },
   cashOut : {
     alignItems : 'center'
   }

})
