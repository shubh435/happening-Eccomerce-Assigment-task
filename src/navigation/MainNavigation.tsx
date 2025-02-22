import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../screen/Signin.tsx';
import {
  AUTH,
  HOME,
  MAINSTACK,
} from '../Constants/Navigator.ts';
import BottomTabStackNavigator from './BottomTabNavigation.tsx';
const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}
      initialRouteName={AUTH.SIGNIN}>
      <AuthStack.Screen name={AUTH.SIGNIN} component={Signin} />
    </AuthStack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={HOME.BOTTOMTAB} component={BottomTabStackNavigator} />
    </HomeStack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <MainStack.Navigator
    screenOptions={{headerShown: false}}
     >
      <MainStack.Screen
        name={MAINSTACK.AUTHNAVIGATION}
        component={AuthNavigation}
      />
      <MainStack.Screen
        name={MAINSTACK.HOMENAVIGATION}
        component={HomeNavigation}
      />
    </MainStack.Navigator>
  );
};
export default MainNavigation;