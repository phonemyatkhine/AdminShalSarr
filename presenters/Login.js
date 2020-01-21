import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Logo from '../views/components/Logo'
import Input from '../views/components/Input'
import RedButton from '../views/components/RedButton'
import ExternalStyle from '../views/styles/ExternalStyle'


class Login extends Component {
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
      if(email=="shop1@gmail.com" && pass=="password") {
        alert("correct")
      }
   }
   render() {
      return (
         <View style = {styles.container}>
            <Logo class={styles.logo} imageUri= "https://i.ibb.co/VVZsGtz/68f9a6a0-b3b0-48bd-846a-260504600fc2-200x200.png"/>
            <Text style={styles.title} >Admin Application</Text>
            <Input placeholder="Shop Account" password={false} handleInput={this.handleEmail}/>
            <Input placeholder="Password" password={true} handleInput={this.handlePassword}/>
            <RedButton buttonText="Login" buttonStyles={ExternalStyle.submitButton} buttonTextStyles={ExternalStyle.submitButtonText} buttonHandle={this.login(this.state.email, this.state.password)} />
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   title : {
     color: '#636e72',
     textAlign: 'center',
     fontSize : 23,
     fontWeight: 'bold',
     width : 600
   },
   logo : {
      width: 250,
      height: 153,
      marginTop:140,
   },
   container: {
      paddingTop: 23,
      backgroundColor : "#FFFFFF",
      flex : 1,
      alignItems : "center",
   },

})
