import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Styles'
import Utils from '../../Common/Utils'
import * as loginActions from '../../ReduxStore/Actions/loginAction'
import { connect} from 'react-redux'

 class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){  
   
  }
logout=()=>{
  this.props.clearCache()
  Utils.clearCache()
 
this.props.navigation.navigate('LoginScreen')
}
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={this.logout}
          style={Styles.btnContainer}
 
          underlayColor='#fff'
           >
          <Text style={Styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
   }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    clearCache:()=>dispatch(loginActions.clearCache()),
  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
