import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const Line = (props) => {
   return (
     <TextInput
       style = {styles.line}
       editable = {false}
     />
   )
}
export default Line

const styles = StyleSheet.create({
  line: {
     borderBottomColor: '#ede7f6',
     borderBottomWidth: 3,
     marginLeft:20,
     marginRight:20,
  },

})
