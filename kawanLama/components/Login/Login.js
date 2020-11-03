import React from 'react'
import {StyleSheet,Text, TouchableOpacity, TextInput} from 'react-native'
import {Container, View} from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Login = props => (
<Container>
    <View style={styles.wrapper}>
        <TextInput 
        style={styles.inputText}
        value={props.valueName}
        onChangeText={props.onChangeName}
        placeholder="input name"
        />
        <TouchableOpacity onPress={props.toMenu}>
            <Text style={styles.textNext}>Next</Text>
        </TouchableOpacity>
    </View>
    
</Container>
)

const styles = StyleSheet.create({
    wrapper:{
        height:hp('100%'),
        justifyContent:'center',
        alignItems:'center',
    },
    inputText:{
        borderWidth:1, 
        width:wp('80%'), 
        height:hp('6%'), 
        borderRadius:10, 
        textAlign:'center'
    },
    textNext:{
        fontSize:15, 
        fontWeight:"bold"
    }
})


export default Login