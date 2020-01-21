import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import TitleBar from '../views/components/TitleBar'
import ProfileHeader from '../views/components/ProfileHeader'
import Line from '../views/components/Line'

class ShopHome extends Component {
   render() {
      return (
         <ScrollView>

            <TitleBar/>
            <ProfileHeader title = "Pizza Hut" location = "Dagon Center"/>
            <Line/>
            <View style = {styles.shopButtons}>
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.login(this.state.email, this.state.password)
                 }>
                 <Text style = {styles.submitButtonText}> Cash User </Text>
              </TouchableOpacity>
              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.login(this.state.email, this.state.password)
                 }>
                 <Text style = {styles.submitButtonText}> Contact Share Sah </Text>
              </TouchableOpacity>
            </View>
         </ScrollView>
      )
   }
}
export default ShopHome

const styles = StyleSheet.create({
   title : {
     color: '#636e72',
     textAlign: 'center',
     fontSize : 23,
     fontWeight: 'bold'
   },

   shopButtons: {
      flex : 1,
      alignItems : 'center',
   },
   line: {
      borderBottomColor: '#ede7f6',
      borderBottomWidth: 3,
      marginLeft:20,
      marginRight:20,
   },
   submitButton: {
      backgroundColor: '#d63031',
      paddingTop: 15,
      marginTop: 30,
      borderRadius : 8,
      height: 50,
      width : 300,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
      fontWeight : 'bold',
   }
})
