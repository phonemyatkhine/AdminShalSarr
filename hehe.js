import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

import Logo from './Logo'
const Input = (props) => {
  return(
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "Shop Account"
       placeholderTextColor = "#d63031"
       autoCapitalize = "none"
       onChangeText = {this.handleEmail}/>
  )
}
class Input extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
            <Logo/>
            <Text style={styles.title} >Admin Application</Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Shop Account"
               placeholderTextColor = "#d63031"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#d63031"
               autoCapitalize = "none"
               secureTextEntry={true}
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Input

const styles = StyleSheet.create({
   title : {
     color: '#636e72',
     textAlign: 'center',
     fontSize : 23,
     fontWeight: 'bold'
   },
   container: {
      paddingTop: 23,
      backgroundColor : "#FFFFFF",
      flex : 1,
   },
   input: {
      marginLeft: 30,
      marginRight: 30,
      marginTop : 30,
      height: 40,
      borderColor: '#d63031',
      borderWidth: 1,
      borderRadius : 10,
      padding : 5,
      paddingLeft : 15,
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
