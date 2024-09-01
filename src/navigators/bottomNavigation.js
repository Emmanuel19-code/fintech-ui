import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from './stackNavigation';
import MyCard from '../screens/MyCard';
import Scan from '../screens/Scan';
import MyActivity from '../screens/MyActivity';
import Profile from '../screens/Profile';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Image, Pressable } from 'react-native';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          if (routeName === "transfers") {
            return { display: "none" }; 
          }
          return {
            height: 85,
            paddingBottom: 20,
          };
        })(route),
        tabBarActiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="main"
        component={StackNavigation}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/home.png")}
              className="w-8 h-8"
            />
          ),
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="card"
        component={MyCard}
        options={{
          tabBarLabel: "My Card",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome6 name="credit-card" size={24} color="#6b7280" />
          ),
        }}
      />
      <Tab.Screen
        name="scan"
        component={Scan}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: () => (
            <Pressable className="w-12 h-12 bg-teal-700 text-gray-500 justify-center items-center mt-4 rounded-full">
              <Image
                source={require("../../assets/scan.png")}
                className="w-4 h-4"
                style={{ tintColor: "white" }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="activity"
        component={MyActivity}
        options={{
          tabBarLabel: "Activity",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/activity.png")}
              className="w-8 h-8"
              style={{ tintColor: "#6b7280" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/profile.png")}
              className="w-8 h-8"
              style={{ tintColor: "#6b7280" }}
            />
          ),
          tabBarActiveTintColor: "black",
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation