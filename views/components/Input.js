import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const Input = (props) => {

  return(
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = {props.placeholder}
       placeholderTextColor = "#d63031"
       autoCapitalize = "none"
       secureTextEntry={props.password}
       onChangeText = {props.handleInput}/>
  )
}
export default Input

const styles = StyleSheet.create({

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
      width : 280,
   },
})
