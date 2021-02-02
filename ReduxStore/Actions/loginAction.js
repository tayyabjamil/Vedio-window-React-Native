import { FETCH_DATA } from '../ActionTypes'
import { DATA_SUCCESS } from '../ActionTypes'
import { DATA_FALIURE} from '../ActionTypes'
import { DATA_INPUT} from '../ActionTypes'
import {CHECKBOX_INPUT} from '../ActionTypes'
import {STOP_TIMER} from '../ActionTypes'
import {START_TIMER} from '../ActionTypes'

import {CLEAR_CACHE} from '../ActionTypes'

import {CLEAR_ERROR_DATA} from '../ActionTypes'


import Api from '../../ApiCall/LoginApi'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeInputData = (value,type) =>{
    return {   
        type:DATA_INPUT,
        inputData:value,
        inputType:type
    }
}
export const stopTimer = (time) =>{
    return {   
        type:STOP_TIMER,
        value:time
    }
}

export const startTimer = (time) =>{
    return {   
        type:START_TIMER,
        value:time
    }
}
export const clearCache = () =>{
    return {   
        type:CLEAR_CACHE,
    }
}
export const storeCheckBoxData = (value,type)=>{
    return {     
        type:CHECKBOX_INPUT,
        inputData:value,
        inputType:type     
    }
}
export const fetchData = () =>{
    return {type:FETCH_DATA}
}
export const clearErrorApi = () =>{
    return {type:CLEAR_ERROR_DATA}
}
export const dataSuccess = (data) =>{
    return {type:DATA_SUCCESS,payload:data}
}
export const dataFaliure = (error) =>{
    return {type:DATA_FALIURE,payload:error}
}

export const callApi = ()=>{
    return (dispatch,getState)=>{
        const data = getState()
   
        dispatch(fetchData(true))
       
        Api.loginApi(data.loginReducer).then((response) => {
            if (response.status == true) {
                AsyncStorage.setItem('usernameText',data.loginReducer.usernameText)
                AsyncStorage.setItem('passwordText',data.loginReducer.passwordText)
                
                if(data.loginReducer.autoLogin==true){
                AsyncStorage.setItem('autoLogin',"true")
                AsyncStorage.removeItem('rememberLogin')
          
              }
              if(data.loginReducer.rememberLogin==true){
       
              AsyncStorage.setItem('rememberLogin',"true")
              AsyncStorage.removeItem('autoLogin')  
              }
                // this.props.navigation.navigate('HomeScreen')   
                dispatch(dataSuccess(response.message))
              
            } else if(response.status == false){
                dispatch(dataFaliure(response.message))
    
            }
    
        })
    }
}
