import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

const CreditCardDesign = () => {
  return (
    <View className="-top-32 mt-1 h-44 ">
      <ImageBackground
        source={require("../../assets/card-design.png")}
        className="w-auto p-3 h-28 rounded-t-lg overflow-hidden"
      >
        <View className="w-auto h-28 rounded-t-lg">
          <View className=" flex flex-row items-center">
            <Image
              source={require("../../assets/credit-card.png")}
              className="w-10 h-10  "
              style={{ tintColor: "white" }}
            />
            <Image
              source={require("../../assets/wifi.png")}
              className="w-12 h-12 "
              style={{ tintColor: "white" }}
            />
          </View>
          <View className="flex flex-row items-center">
            <View className="flex flex-row items-center m-1">
              <View>
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
            </View>
            <View className="flex flex-row items-center m-1">
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
            </View>
            <View className="flex flex-row items-center">
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
              <View className="-ml-3">
                <Entypo name="dot-single" size={20} color="white" />
              </View>
            </View>
            <Text className="text-white text-lg m-1">1990</Text>
          </View>
        </View>
      </ImageBackground>

      <View className="bg-teal-700 w-auto p-3 h-16 flex flex-row items-center rounded-b-lg justify-between">
        <Text className="text-white font-bold text-lg">$10,2500.00</Text>
        <View className="flex-row flex items-center">
          <View className="w-6 h-6 rounded-full bg-white -right-2 opacity-70"></View>
          <View className="w-6 h-6 rounded-full bg-gray-100 opacity-40"></View>
        </View>
      </View>
    </View>
  );
};

export default CreditCardDesign;
