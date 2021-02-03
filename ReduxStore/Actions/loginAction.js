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
import Constant from '../../Common/Constants'

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

                
                if(data.loginReducer.autoLogin==true){
                Constant.LocalStore.setItem(Constant.autoLogin,"true")
                Constant.LocalStore.removeItem(Constant.rememberLogin)
                Constant.LocalStore.setItem(Constant.username,data.loginReducer.usernameText)
                Constant.LocalStore.setItem(Constant.password,data.loginReducer.passwordText)
                
              }
              if(data.loginReducer.rememberLogin==true){
       
              Constant.LocalStore.setItem(Constant.rememberLogin,"true")
              Constant.LocalStore.setItem(Constant.username,"")
              Constant.LocalStore.setItem(Constant.password,"")
           
              Constant.LocalStore.removeItem(Constant.autoLogin)  
              }
                dispatch(dataSuccess(response.message))
              
            } else if(response.status == false){
                dispatch(dataFaliure(response.message))
    
            }
    
        })
    }
}
