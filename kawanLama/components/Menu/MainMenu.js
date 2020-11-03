import React from 'react'
import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native'
import {Container} from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Header from '../../particles/Header'


const MainMenu = props => (
<Container>
    <View>
        
    <Header 
    ScreenName="Kawan lama"
    goBack = { props.goBack}
    icon = {true}
    mode ={props.mode}
    modeList = {props.modeList}
    />
    </View>
    <FlatList 
        key = {props.modeList ? 0 : 1}
        numColumns={props.modeList ? 1 : 3}
        data={props.event}
        renderItem={props.renderListEvent}
        keyExtractor={(item, index) => JSON.stringify(index)}
    /> 
    
    
</Container>
)

const styles = StyleSheet.create({
    icons:{
        fontSize: hp('3%'), 
        color:'grey',
        marginHorizontal:10
    },
})


export default MainMenu