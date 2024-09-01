import { View, Text, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
const Receipients = ({ name, imgPath, status }) => {
  return (
    <View
      className={`m-2 border-2 ${
        status == "active" ? "border-teal-600" : "border-gray-200"
      } h-32 p-1 rounded-xl w-28`}
    >
      {status == "active" && (
        <View className="absolute right-2 top-2">
          <Entypo name="check" size={12} color="#0f766e" />
        </View>
      )}

      <View className="justify-around h-full items-center">
        <Image source={imgPath} className="w-8 h-8 rounded-full" />
        <Text className="text-center font-bold" style={{ fontSize: 12 }}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default Receipients;
