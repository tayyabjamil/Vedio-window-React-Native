import {FETCH_DATA} from '../ActionTypes';
import {DATA_SUCCESS} from '../ActionTypes';
import {DATA_FALIURE} from '../ActionTypes';
import {DATA_INPUT} from '../ActionTypes';
import {CHECKBOX_INPUT} from '../ActionTypes';
import {CLEAR_CACHE} from '../ActionTypes'
import {STOP_TIMER} from '../ActionTypes'
import {START_TIMER} from '../ActionTypes'
import {CLEAR_ERROR_DATA} from '../ActionTypes'

import Constant from '../../Common/Constants';
// const getData =async()=>{
//   return Constant.LocalStore.getItem(Constant.timerStart)
  
// }

const initialState = {

  loading: false,
  success: '',
  error: '',
  usernameText: '',
  passwordText: '',
  rememberLogin:false,   
  autoLogin:false,
  stopTime:false,
  timerStart: ''
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case DATA_INPUT:
      if (action.inputType === Constant.username) {
        return {
          ...state,
          usernameText: action.inputData,
        };
      } else if (action.inputType === Constant.password) {
        return {
          ...state,
          passwordText: action.inputData,
        };
      }

      case CHECKBOX_INPUT:{
        if (action.inputType === Constant.autoLogin) {
          return {
            ...state,
            autoLogin: action.inputData,
            rememberLogin:false          
          };
        
        }else if (action.inputType === Constant.rememberLogin) {
        
          return {
            ...state,
            rememberLogin: action.inputData,
            autoLogin:false
          };
        }
    }
      
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: '',
      };
      case FETCH_DATA:
        return {
          ...state,
          loading: true,
        };
     
    case DATA_FALIURE:
      return {
        ...state,
        loading: false,
        success: '',
        error: action.payload,
      };

      case CLEAR_CACHE:
        return {
          ...state,
          usernameText: '',
          passwordText: '',
          rememberLogin:false,
          autoLogin:false,
          success:'',
          error:'',
          timerStart: ''

          };
      case STOP_TIMER:
      console.log(state.stopTime)    
      return {
              ...state,
              stopTime: action.value,
        } 
        case START_TIMER:
      console.log(state.stopTime)    
      return {
              ...state,
              stopTime: action.value,
        } 
        
        case CLEAR_ERROR_DATA:
      return {
              ...state,
              error: '',
        } 
    default:
      return state;
  }
};

export default LoginReducer;
