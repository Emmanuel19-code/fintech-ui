import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View styles={styles.main}>
      <Text className="text-red-400">Splash</Text>
    </View>
  );
}

export default Splash

const styles = StyleSheet.create({
   main:{
     backgroundColor:"black",
     height:"100%",
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center"
   }
})