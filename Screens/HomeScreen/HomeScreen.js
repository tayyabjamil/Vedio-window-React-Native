import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import Styles from './Styles'
import Utils from '../../Common/Utills'
import * as loginActions from '../../ReduxStore/Actions/loginAction'
import { connect} from 'react-redux'
import Constant from '../../Common/Constants'
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
 
this.props.navigation.navigate(Constant.LoginRoute)
}
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={this.logout}
          style={Styles.btnContainer}>
          <Text style={Styles.btnText}>{Constant.LabelLogout}</Text>
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
