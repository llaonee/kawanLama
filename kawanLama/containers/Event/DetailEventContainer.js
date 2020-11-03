 import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
 
import DetailEvent from '../../components/Event/DetailEvent'
import { URL_API, key } from '../../env';
class DetailEventContainer extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      gestureName: 'none',
      dataEvent: this.props.navigation.state.params[0],
      dataUser: this.props.navigation.state.params[1],
      detailEvent:'',
      StatusEvent: ''
    };
  }
  componentDidMount(){
     this.getDetailEvent()
  }
  async getDetailEvent(){
      const state = this.state
    const postData = await JSON.stringify( {
        "idUser":state.dataUser.UserId,
        "idEvent": this.state.dataEvent.id,
        "key" : key
    })
    await console.log('post', postData)
    const response = await fetch(`${URL_API}Event/detailtrackevent`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: postData
    });
    const dataRes = await response.json()
    await console.log('detail',dataRes)
    if(dataRes == ''){
        await Alert.alert('Informasi', 'koneksi ke server gagal')
        }else{
        if(dataRes.Status == 'Success'){
            await this.setState({
                detailEvent:dataRes.Data,
                StatusEvent: dataRes.StatusEvent
            })
        }else{
            Alert.alert('informasi', dataRes.Message)
        }
    }
  }
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        const state = this.state
        let id = parseInt(state.detailEvent.id) + 1
        this.getDetailNextList(id)
        break;
      case SWIPE_RIGHT:
        this.props.navigation.goBack();
        break;
    }
  }

    async getDetailNextList(id){
        const state = this.state
        const postData = await JSON.stringify( {
            "idUser":state.dataUser.UserId,
            "idEvent": id,
            "key" : key
        })
        await console.log('post', postData)
        const response = await fetch(`${URL_API}Event/detailtrackevent`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: postData
        });
        const dataRes = await response.json()
        await console.log('next detail',dataRes)
        if(dataRes == ''){
            await Alert.alert('Informasi', 'koneksi ke server gagal')
            }else{
            if(dataRes.Status == 'Success'){
                await this.setState({
                    detailEvent:dataRes.Data,
                    StatusEvent: dataRes.StatusEvent
                })
            }else{
                Alert.alert("information", "The End")
            }
        }
  }
  async doTrack(){
    const state = this.state
    const postData = await JSON.stringify( {
        "idUser":state.dataUser.UserId,
        "idEvent": state.detailEvent.id,
        "key" : key
    })
    await console.log('post', postData)
    const response = await fetch(`${URL_API}Event/addtrackevent`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: postData
    });
    const dataRes = await response.json()
    if(dataRes == ''){
        await Alert.alert('Informasi', 'koneksi ke server gagal')
        }else{
        if(dataRes.Status == 'Success'){
           this.getDetailEvent()
        }else{
            Alert.alert("information", "filed track")
        }
    }
  }
   async disTrack(){
    const state = this.state
    const postData = await JSON.stringify( {
        "idUser":state.dataUser.UserId,
        "idEvent": state.detailEvent.id,
        "key" : key
    })
    await console.log('post', postData)
    const response = await fetch(`${URL_API}Event/deletetrackevent`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: postData
    });
    const dataRes = await response.json()
    if(dataRes == ''){
        await Alert.alert('Informasi', 'koneksi ke server gagal')
        }else{
        if(dataRes.Status == 'Success'){
           this.getDetailEvent()
        }else{
            Alert.alert("information", "filed distrack")
        }
    }
   }
  render() {

    const states = this.state
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <DetailEvent
            goBack = {() => this.props.navigation.goBack()}
            data = {states.detailEvent}
            track = {()=> this.doTrack()}
            disTrack = {()=> this.disTrack()}
            StatusEvent ={states.StatusEvent}
        />
      </GestureRecognizer>
    );
  }
}
 
export default DetailEventContainer;