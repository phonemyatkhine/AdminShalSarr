import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const TitleBar = (props) => {
   return (
     <View style = {styles.titlebar}>
      <Text style = {styles.title} >Admin Panel </Text>
     </View>
   )
}
export default TitleBar

const styles = StyleSheet.create({
  titlebar : {
     alignSelf: 'stretch',
     height: 80,
     backgroundColor : "#9d000a",
  },
  title : {
    color: '#FFFFFF',
    fontSize : 18,
    width : 600,
    paddingLeft:10,
    paddingTop:40,
  }
})
