import { createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import LoginReducer from './Reducers/loginReducer'
const rootReducer = combineReducers({
  loginReducer:LoginReducer,
})

const configureStore =()=>createStore(
    rootReducer,
    applyMiddleware(thunk)
    )
export  default configureStore