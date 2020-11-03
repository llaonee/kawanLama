import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native'
import {} from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'


import colors from '../assets/colors';

const Header = props => (
  <View style={styles.shadow}>
    <SafeAreaView style={ styles.safeArea }/>
    <View style={ styles.wrapperHeader }>
      <TouchableOpacity onPress={ props.goBack } style={ styles.wrappericonBack }>
          <AntDesign name="arrowleft" style={ styles.iconBack }/> 
      </TouchableOpacity>
      <Text style={ styles.txtTitle }>{ props.ScreenName }</Text>
      {props.icon ?
      <TouchableOpacity onPress={ props.mode } style={ styles.wrappericonNotif }>
        {props.modeList ? 
                <Ionicons name="list" style={ styles.iconBack }/>  
            :
                <Ionicons name="grid" style={ styles.iconBack }/>  
            }
      </TouchableOpacity>
      :
      <TouchableOpacity onPress={ props.toNotif } style={ styles.wrappericonNotif }/>
      }
    </View>
    <View style={ styles.shadow }/>
  </View>
)

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:colors.darkBlue
    // backgroundColor:colors.white
  },
  wrapperHeader:{
    flexDirection: 'row', 
    height:hp('5%'), 
    // backgroundColor:colors.bright_cyan, 
    backgroundColor:colors.darkAbu,
    justifyContent:'center',
    width: wp('100%'),
    shadowColor: "#cecece",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 4,
      width: 0
    }
  },
  wrappericonBack:{
    color:colors.darkRed, 
    // color:'#fff',
    fontSize: hp('3%'), 
    marginRight:'auto', 
    marginLeft:wp('5%'), 
    alignSelf:'center',
  },
  iconBack:{
    color:colors.white,
    fontSize: hp('2.5%'), 
    marginRight:'auto',
    alignSelf:'center',
  },
  txtTitle:{
    alignSelf:'center', 
    textAlign:'center', 
    color:colors.white
  },
  iconNotif:{
    color:colors.white, 
    // color:'#000',
    fontSize:hp('3%'), 
    marginLeft:'auto', 
    alignSelf:'center'
  },
  wrappericonNotif:{
    color:'#fff',
    fontSize:hp('3%'), 
    marginLeft:'auto', 
    marginRight:wp('5%'), 
    alignSelf:'center'
  },
  shadow:{
    width: wp('100%'),
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: "#cecece",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 4,
      width: 0
    }
  },
})

export default Header
