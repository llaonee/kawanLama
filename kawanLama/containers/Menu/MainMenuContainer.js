import React, {Component} from 'react'
import { StackActions, NavigationActions } from 'react-navigation';
import AsyncStorage from 'react-native-async-storage';


// import component
import MainMenu from '../../components/Menu/MainMenu'
import Event from '../../particles/Event';
import { URL_API, key } from '../../env';

class MainMenuContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            DataEvents:'',
            modeList:true,
            dataUser: this.props.navigation.state.params,
        }
    }
    componentDidMount(){
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.getEvent()
        });
    }
    async getEvent(){
        const state = this.state
        const postData = await JSON.stringify( {
            "idUser":state.dataUser.UserId,
            "key":key
        })
        await console.log('post', postData)
        const response = await fetch(`${URL_API}Event/getevent`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: postData
        });
        const dataRes = await response.json()
        await console.log('res',dataRes)
        if(dataRes == ''){
            await Alert.alert('Informasi', 'koneksi ke server gagal')
            }else{
            if(dataRes.Status == 'Success'){
                await this.setState({
                    DataEvents:dataRes.Data,
                })
            }else{
                Alert.alert('informasi', dataRes.Message)
            }
        }
    }
    render(){
        console.log('data', this.state)
        const state = this.state
        return(
            <MainMenu
                goBack = {() => this.props.navigation.goBack()}
                mode = { ()=> this.setState({modeList: !state.modeList}) }
                modeList = {state.modeList}
                event = {state.DataEvents}
                renderListEvent = { ({item, index}) => (
                <Event
                    modeList = {state.modeList}
                    data = { item }
                    toDetailEvent= {() => this.props.navigation.navigate('DetailEventContainer', [item, state.dataUser])}
                />
                )}
            />
        )
    }
}
export default MainMenuContainer