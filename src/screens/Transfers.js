import { View, Text, ScrollView,  TextInput, Pressable,Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Entypo from "@expo/vector-icons/Entypo";
import CreditCardDesingTwo from '../components/CreditCardDesingTwo';
import Receipients from '../components/Receipients';


const data = [
  {
    id: 1,
    name: "Maria Sevchenko",
    imgPath: require("../../assets/person.jpeg"),
    status: "active",
  },
  {
    id: 2,
    name: "Andrade Alexander Base",
    imgPath: require("../../assets/person.jpeg"),
    status: "notactive",
  },
  {
    id: 3,
    name: "Mike Prince",
    imgPath: require("../../assets/person.jpeg"),
    status: "notactive",
  },
];

const Transfers = () => {
  return (
    <KeyboardAvoidingView className="flex-1 bg-white h-full p-3">
      <View className="">
        <View className=" mt-10 flex flex-row items-center">
          <View className="w-10 h-10 items-center justify-center rounded-xl border border-gray-200">
            <Entypo name="chevron-thin-left" size={18} color="black" />
          </View>
          <Text className="text-center w-64 font-bold text-lg">Transfer</Text>
        </View>
        <View className="mt-8">
          <Text className="text-xl font-bold">Choose cards</Text>
        </View>
        <ScrollView
          className="mt-4 -ml-1"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <CreditCardDesingTwo />
          <CreditCardDesingTwo />
        </ScrollView>
        <View className="">
          <Text className="font-bold text-lg">Choose receipients</Text>
          <View className="bg-gray-100 p-3.5 mt-4 rounded-xl flex flex-row items-center">
            <Pressable>
              <Image
                source={require("../../assets/search.png")}
                className="w-6 h-6 mr-1"
              />
            </Pressable>
            <TextInput
              placeholder="Search contacts...."
              className="text-gray-400"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>
        <ScrollView className="mt-5" horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                data.map((item)=>{
                    return <Receipients name={item.name} imgPath={item.imgPath} key={item.id} status={item.status}/>;
                })
            }
        </ScrollView>
        <Pressable className="bg-black opacity-80 rounded-xl p-3 mt-12">
             <Text className="text-lg text-white text-center">Continue</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Transfers