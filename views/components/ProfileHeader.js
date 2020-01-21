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
     <View>

        <View style = {styles.tab1}>
          <TouchableOpacity style = {styles.editButton}>
             <Text style = {styles.editButtonText}> Edit </Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.tab2}>
          <Logo imageUri = "https://i.ibb.co/GkBqQg9/download.png"
          class = {styles.logo}/>
          <Text style = {styles.shopName}> {props.title} </Text>
          <View style = {styles.tab1}>
              <Text style={styles.location} adjustsFontSizeToFit={true} numberOfLines={1}>
               {props.location}
              </Text>
              <Image
                source = {{uri:'https://i.ibb.co/128g5ty/Pngtree-vector-location-icon-3781982.png'}}
                style = {styles.icon}
              />
          </View>

        </View>

     </View>
   )
}
export default ProfileHeader

const styles = StyleSheet.create({
  tab1 : {
    flexDirection : "row",
    flexGrow : 1,
    alignItems: 'center',
    flexDirection : 'row-reverse',
  },
  tab2 : {
    flexDirection : "column",
    alignItems : 'center',
    justifyContent : 'center',
  },
  logo : {
     width: 200,
     height: 200,
     marginTop: 10,
     borderRadius : 20,
     borderColor : "#ede7f6",
     marginBottom : 10,
     borderWidth: 3,
  },
  icon : {
     width: 30,
     height: 30,
     padding : 3,
  },
  shopName : {
    color: '#000000',
    fontSize : 26,
    fontWeight : 'bold',
  },
  location : {
    color: '#616161',
    fontSize : 16,
    fontWeight : 'bold',
    width : 120,
  },
  editButton: {
     backgroundColor: '#d63031',
     paddingTop: 15,
     margin: 10,
     marginLeft : 10,
     borderRadius : 8,
     height: 50,
     width : 100,
  },
  editButtonText:{
     color: 'white',
     textAlign: 'center',
  },
  edit : {
    flex : 1,
    flexDirection : 'row-reverse',
  }
})
