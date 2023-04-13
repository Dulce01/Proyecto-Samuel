import 'react-native-gesture-handler';
import * as React from 'react';
import {View,Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import Home from "../screens/home";
import Login from "../screens/login";
import Register from '../screens/register'; 

export default class ButonTabNavigator extends Component{
  render(){
   return(
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.screen name="Home"component={Home} />
    <Tab.screen name="Login"component={Login}/>
    <Tab.screen name="Register"component={Register}/>        
    </Tab.Navigator>    
    </NavigationContainer> 
   )
  }  
}