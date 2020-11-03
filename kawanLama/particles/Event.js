import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { List, ListItem } from 'native-base'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../assets/colors.js';

const Event = props => (
    <View>
    <TouchableOpacity onPress={props.toDetailEvent}>
        {props.modeList ?
        <View style={styles.bodyContainer}>
        <View style={styles.mainList}>
        <Image source={{uri:props.data.image}} style={styles.imageList}/>
        <View style={styles.contentList}>
            <View style={styles.contentListName}>
                <View style={{marginVertical:1}}>
                        <Text>{props.data.name}</Text>
                </View>
                <View style={{marginVertical:1}}>
                        <Text>{props.data.location}</Text>
                </View>
            </View>
            <View style={props.data.type === 'free' ? styles.contentListTypeFree:styles.contentListTypePaid}>
                <Text style={styles.textType}>{props.data.type}</Text>
            </View>
        </View>

        </View>
    </View>
    :
    <View style={styles.bodyGrid}>
        <Image source={{uri:props.data.image}} style={styles.imageGrid}/>
        <View style={ props.data.type === 'free' ? styles.gridTypeFree : styles.gridTypePaid}>
            <Text style={styles.textGrid}>{props.data.name}</Text>
        </View>
    </View>
    }
    </TouchableOpacity>
  </View>
)
const styles = StyleSheet.create({
    bodyContainer:{
        flexDirection:'row',
        marginVertical:wp('1%'),
        width: wp('100%'),
        justifyContent:'center',
        alignItems: 'center',
    },
    mainList:{
        width: wp('93%'),
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    imageList:{
        height:hp('10%'), 
        width:hp('10%'), 
        marginRight:5, 
        borderRadius:5
    },
    contentList:{
        backgroundColor:colors.AbuHalus, 
        borderRadius:5, 
        flexDirection:'row', 
        width:wp('70%'), 
        height:hp('10%')
    },
    contentListName:{
        margin:5, 
        backgroundColor:colors.AbuHalus, 
        paddingHorizontal:5, 
        borderRadius:5, 
        flex:0.7, 
        alignSelf:'center'
    },
    contentListTypeFree:{
        flex:0.3, 
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:colors.green, 
        height:hp('10%'), 
        borderRadius:10
    },
    contentListTypePaid:{
        flex:0.3, 
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:colors.yellow, 
        height:hp('10%'), 
        borderRadius:10
    },
    textType:{
        fontSize:17,
        fontWeight:'bold', 
        color:colors.darkAbu
    },
    bodyGrid:{
        backgroundColor:colors.Abu, 
        margin:5, 
        borderRadius:5, 
        width:wp('30%'), 
        justifyContent:'center', 
        alignItems:'center' 
    },
    imageGrid:{
        height:hp('15%'), 
        width:wp('28%'), 
        margin:5, 
        borderRadius:5
    },
    textGrid:{
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:5,
        color:colors.darkAbu
    },
    gridTypeFree:{
        backgroundColor:colors.green,
        width:wp('30%'),
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },
    gridTypePaid:{
        backgroundColor:colors.yellow,
        width:wp('30%'),
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    }
})
export default Event