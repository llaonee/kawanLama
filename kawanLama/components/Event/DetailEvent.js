import React from 'react'
import {StyleSheet,Text, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native'
import {Container, View} from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Header from '../../particles/Header'
import colors from '../../assets/colors';

const DetailEvent = props => (
<Container>
    <Header 
        ScreenName="Detail"
        goBack = { props.goBack}
    />
    <View>
        <Image source={{uri:props.data.image}} style={styles.image}/>
        <View style={styles.margin}>
            <View style={styles.marginBottom}>
                <View style={styles.flexDirection}>
                    <Text style={styles.leftText}>Name </Text>
                    <Text style={styles.rightText}>: {props.data.name}</Text>
                </View>
                <View style={styles.flexDirection}>
                    <Text style={styles.leftText}>Location </Text>
                    <Text style={styles.rightText}>: {props.data.location}</Text>
                </View>
                <View style={styles.flexDirection}>
                    <Text style={styles.leftText}>Type </Text>
                    <View style={styles.contentType}>
                        <Text style={props.data.type === 'free' ? styles.freeType: styles.paidType}>{props.data.type}</Text>
                    </View>
                </View>
            </View>
            { props.StatusEvent === 1 ? 
                <TouchableOpacity onPress={ props.disTrack} style={styles.delTrack}>
                    <Text style={{fontWeight:'bold', color:colors.white}}>Distrack</Text>
                </TouchableOpacity>
                :props.StatusEvent === 0 ?
                <TouchableOpacity onPress={props.track} style={styles.addTrack}>
                    <Text style={{fontWeight:'bold', color:colors.white}}>Track</Text>
                </TouchableOpacity>
                :<View/>
            }
        </View>
    </View>
    
</Container>
)

const styles = StyleSheet.create({
    image:{
        height:hp('40%')
    },
    margin:{
        margin:10
    },
    marginBottom:{
      marginBottom:10  
    },
    flexDirection:{
        flexDirection:'row'
    },
    leftText:{
        flex:0.3
    },
    rightText:{
        flex:0.7
    },
    contentType:{
        flex:0.7, 
        justifyContent:'center'
    },
    freeType:{
        backgroundColor:colors.green, 
        width:wp('12%'), 
        fontWeight:'bold', 
        textAlign:'center', 
        color:colors.darkAbu, 
        borderRadius:5
    },
    paidType:{
        backgroundColor:colors.yellow, 
        width:wp('12%'), 
        fontWeight:'bold', 
        textAlign:'center', 
        color:colors.darkAbu, 
        borderRadius:5
    },
    addTrack:{
        backgroundColor:colors.borderAbu, 
        height:hp('5%'), 
        justifyContent:'center', 
        alignItems:'center', borderRadius:5
    },
    delTrack:{
        backgroundColor:colors.redOpasityLow, 
        height:hp('5%'), 
        justifyContent:'center', 
        alignItems:'center', borderRadius:5
    }
})


export default DetailEvent