import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigators/stackNavigation";
import React, { useState, useEffect } from "react";
import Splash from "./src/screens/Splash";
import BottomNavigation from "./src/navigators/bottomNavigation";


export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000)
  }, [])
  return (
    <NavigationContainer>
      {showSplash ? <Splash /> : <BottomNavigation/>}
    </NavigationContainer>
  );
}
