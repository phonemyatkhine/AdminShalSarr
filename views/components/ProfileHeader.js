import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Logo from './Logo'

const ProfileHeader = (props) => {
   return (
     <View style = {styles.tab1}>
        <Logo imageUri = "https://i.ibb.co/GkBqQg9/download.png"
        class = {styles.logo}/>
        <View style = {styles.tab2}>
          <Text style={styles.shopName}> {props.title} </Text>
          <View style= {styles.tab1}>
            <Image
              source = {{uri:'https://i.ibb.co/128g5ty/Pngtree-vector-location-icon-3781982.png'}}
              style={styles.icon}
            />
            <Text style={styles.location}>
             {props.location}
            </Text>
          </View>
          <TouchableOpacity style = {styles.submitButton}>
             <Text style = {styles.submitButtonText}> Edit </Text>
          </TouchableOpacity>

        </View>
     </View>
   )
}
export default ProfileHeader

const styles = StyleSheet.create({
  tab1 : {
    flexDirection : "row"
  },
  tab2 : {
    flexDirection : "column"
  },
  logo : {
     width: 150,
     height: 150,
     marginTop: 10,
     marginLeft:10,
     borderRadius : 2,
     borderColor : "#ede7f6",
     padding : 3,
     borderWidth: 1,
  },
  icon : {
     width: 30,
     height: 30,
     marginLeft:10,
     padding : 3,
  },
  shopName : {
    color: '#000000',
    fontSize : 26,
    fontWeight : 'bold',
    width : 600,
    paddingLeft:10,
    paddingTop: 10,
  },
  location : {
    color: '#616161',
    fontSize : 16,
    fontWeight : 'bold',
    width : 600,
    paddingTop: 5,
  },
  submitButton: {
     backgroundColor: '#d63031',
     paddingTop: 15,
     margin: 10,
     marginLeft : 10,
     borderRadius : 8,
     height: 50,
     width : 100,
  },
  submitButtonText:{
     color: 'white',
     textAlign: 'center',
  }
})
