import React, {useEffect} from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import Constant from '../../Common/Constants';
const Splash = (props) => {
  useEffect(() => {
    gotoHomeScreen();
  });

  const gotoHomeScreen = async () => {
    const rememberLogin = await Constant.LocalStore.getItem(Constant.rememberLogin);
    const autoLogin = await Constant.LocalStore.getItem(Constant.autoLogin);

    setTimeout(async () => {
      if (rememberLogin == 'true') {
        props.navigation.navigate(Constant.HomeRoute);
      }

      if (autoLogin == 'true') {
        props.navigation.navigate(Constant.LoginRoute);
      }
      if (autoLogin == null && rememberLogin == null) {
        props.navigation.navigate(Constant.LoginRoute);
      }
    }, 500);
  };
  return <View style={Styles.container}></View>;
};

export default Splash;
