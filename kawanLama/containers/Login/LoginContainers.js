import React, {Component} from 'react'
import { StackActions, NavigationActions } from 'react-navigation';
import AsyncStorage from 'react-native-async-storage';


// import component
import Login from '../../components/Login/Login';
import { URL_API, key } from '../../env';


class LoginContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            Name:''
        }
    }
    // this.props.navigation.navigate('MainMenuContainer')
    async getUser(){
        const state = this.state
        const postData = await JSON.stringify( {
            "name":state.Name,
            "key":key
        })
        await console.log('post', postData)
        const response = await fetch(`${URL_API}Event/getuser`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: postData
        });
        const dataRes = await response.json()
        console.log('user',dataRes)
        if(dataRes == ''){
            await Alert.alert('Informasi', 'koneksi ke server gagal')
            }else{
            if(dataRes.Status == 'Success'){
                this.props.navigation.navigate('MainMenuContainer', dataRes)
            }else{
                Alert.alert("information", "filed distrack")
            }
        }
    }
    render(){
        console.log('kaka', this.state)
        return(
            <Login

            valueName = {this.state.Name}
            onChangeName = {(Name)=>this.setState({Name})}
            toMenu={()=> this.getUser() }
            />
        )
    }
}
export default LoginContainer