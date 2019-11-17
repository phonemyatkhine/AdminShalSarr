import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import TitleBar from '../views/components/TitleBar'
import ProfileHeader from '../views/components/ProfileHeader'


class ShopHome extends Component {
   render() {
      return (
         <View style = {styles.container}>
            <TitleBar/>
            <ProfileHeader title = "Pizza Hut" location = "Dagon Center"/>
            <TextInput
              style = {styles.line}
              editable = {false}
            />
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Cash User </Text>
            </TouchableOpacity>
         </View>
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
   container: {
      paddingTop: 30,
      backgroundColor : "#FFFFFF",
      flex : 1,
   },
   line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20,
   },
   submitButton: {
      backgroundColor: '#d63031',
      paddingTop: 15,
      margin: 30,
      borderRadius : 8,
      height: 50,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
   }
})
