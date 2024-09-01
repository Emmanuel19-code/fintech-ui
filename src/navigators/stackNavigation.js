import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Transfers from "../screens/Transfers";


const stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="home" component={Home}  options={{ 
         headerShown:false
       }}/>
       <stack.Screen name="transfers" component={Transfers} options={{ 
         headerShown:false
        }}/>
    </stack.Navigator>
  );
};

export default StackNavigation;
