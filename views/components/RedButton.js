import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const RedButton = (props) => {

  const buttonStyles = props.buttonStyles;
  const buttonTextStyles = props.buttonTextStyles;


  return (
    <TouchableOpacity style = {buttonStyles}  onPress = { props.buttonHandle }>
      <Text style = {buttonTextStyles}> {props.buttonText} </Text>
    </TouchableOpacity>
  )
}


export default RedButton
