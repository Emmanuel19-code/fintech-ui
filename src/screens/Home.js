import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground , Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import CreditCardDesign from "../components/CreditCardDesign";
const Home = ({navigation}) => {
  return (
    <View className="bg-white h-screen">
      <View className="bg-teal-700 h-56 p-3">
        <View className="mt-7 ml-3 flex flex-row">
          <View className="flex-1">
            <Text className="text-white">Welcome back!</Text>
            <Text className="text-white text-xl font-bold">
              Anabella Angela
            </Text>
          </View>
          <TouchableOpacity className="border-gray-100 border  rounded-xl w-12 h-12 p-2 items-center justify-center">
            <Ionicons name="notifications-outline" size={26} color="white" />
          </TouchableOpacity>
          <View className="w-2 h-2 rounded-full -left-6 top-3 bg-red-500"></View>
        </View>
      </View>
      <View className="p-3">
        <CreditCardDesign />
        <View className="bg-gray-200 p-3 -top-24 h-16 rounded-lg flex flex-row items-center justify-between">
          <Pressable className="items-center">
            <View className="w-8 h-8 rounded-full justify-center items-center border-2">
              <FontAwesome6 name="dollar-sign" size={16} color="#0d9488" />
            </View>
            <Text className="font-bold text-sm">Deposit</Text>
          </Pressable>
          <Pressable className="items-center" onPress={()=>navigation.navigate("transfers")}>
            <View className="w-8 h-8 rounded-full border-2 justify-center items-center">
              <FontAwesome6 name="arrows-rotate" size={16} color="#0d9488" />
            </View>
            <Text className="text-sm font-bold">Transfers</Text>
          </Pressable>
          <Pressable className="items-center">
            <View className="w-8 h-8 rounded-full justify-center items-center border-2">
              <FontAwesome6 name="dollar-sign" size={16} color="#0d9488" />
            </View>
            <Text className="text-sm font-bold">Withdraw</Text>
          </Pressable>
          <View>
            <Image
              source={require("../../assets/more.png")}
              className="w-8 h-8"
            />
            <Text className="text-sm font-bold">More</Text>
          </View>
        </View>
        <View className="-mt-16 flex flex-row items-center justify-between">
          <Text className="text-gray-500 font-bold">Today, Aug 31</Text>
          <View className="flex flex-row items-center">
            <Text className="font-bold text-sm">All Transactions</Text>
            <TouchableOpacity>
              <Entypo name="chevron-small-right" size={24} color="#2dd4bf" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View className="border-b border-gray-300 p-2 flex-row items-center mt-2 flex justify-between">
            <View className="flex flex-row items-center">
              <View className="w-12 h-12  items-center justify-center m-1 rounded-lg bg-gray-200">
                <FontAwesome6 name="dumbbell" size={20} color="black" />
              </View>
              <View>
                <Text className="font-bold">Gym</Text>
                <Text className="text-gray-400">Payment</Text>
              </View>
            </View>
            <Text className="font-bold text-lg">-$45.99</Text>
          </View>
          <View className="border-b border-gray-300 p-2 flex-row items-center mt-2 flex justify-between">
            <View className="flex flex-row items-center">
              <View className="w-12 h-12  items-center justify-center m-1 rounded-lg bg-gray-200">
                <FontAwesome6 name="dollar-sign" size={16} color="#0d9488" />
              </View>
              <View>
                <Text className="font-bold">Bank of America</Text>
                <Text className="text-gray-400">Deposit</Text>
              </View>
            </View>
            <Text className="font-bold text-[#0d9488] text-lg">+$1,328.00</Text>
          </View>
          <View className="border-b border-gray-300 p-2 flex-row items-center mt-2 flex justify-between">
            <View className="flex flex-row items-center">
              <View className="w-12 h-12  items-center justify-center m-1 rounded-lg bg-gray-200">
                <Feather name="send" size={22} color="orange" />
              </View>
              <View>
                <Text className="font-bold">To Brody Armando</Text>
                <Text className="text-gray-400">Sent</Text>
              </View>
            </View>
            <Text className="font-bold text-lg">-$699.00</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
