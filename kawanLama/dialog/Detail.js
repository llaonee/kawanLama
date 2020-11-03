import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { List, ListItem } from 'native-base'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import colors from '../assets/colors.js';

const Detail = props => (
    <View style={{width:wp('100%'), height:hp('100%'), backgroundColor:colors.white, zIndex:99}}>
        <Text>dialog</Text>
    </View>
)
const styles = StyleSheet.create({})
export default Detail