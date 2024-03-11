import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons";

const image = { uri: 'https://images.unsplash.com/photo-1514489024785-d5ba8dfb2198?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
const icon = {uri: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png'}
export default function Login() {
  return (
    <View style={styles.container}>
        <ImageBackground 
        source={image}
        resizeMod='cover'
        style={styles.image}>
   
<View style={styles.buttonBar}>

<View style={styles.bgimg}>
<Image source={icon} style={styles.icon}  />
<TextInput 
   style={styles.googleBtn}
   placeholder='Log In With Google'
   sourceTextEntry={true}/>
</View>

<Text style={styles.or}>Or</Text>

<View style={styles.inputs}>
<TextInput 
   style={styles.email}
   placeholder='EMAIL'
   sourceTextEntry={true}/>

<TextInput 
   style={styles.password}
   placeholder='Password'
   sourceTextEntry={true}/>
</View>
</View>




 </ImageBackground>

        <StatusBar style='light'/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
buttonBar: {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  marginTop: 100,
},
googleBtn: {
  flex: 1,
  // color: '#222',
  fontSize: 20,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 0,
},
bgimg: {
  // flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 18,
  backgroundColor: 'white',
  borderRadius: 100,
  marginBottom:0,
},
icon: {
  width: 30,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 15,
},

or: {
  color: 'white',
  marginTop: 30,
  fontSize: 20,
  marginBottom: 0,
},
inputs: {
  flex: 1,
  // flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
email: {
  color: 'white',
  backgroundColor: 'purple',
  // marginTop: 33,
  padding: 15,
  marginTop: 30,
  marginBottom: 0,
  paddingLeft: 150,
  paddingRight: 150,
  fontSize: 20,
  borderRadius: 100,
},
password: {
  color: 'white',
  backgroundColor: 'purple',
  marginTop: 0,
  flexDirection: 'row',
  padding: 15,
  marginTop: 30,
  marginBottom: 0,
  paddingLeft: 150,
  paddingRight: 150,
  fontSize: 16,
  borderRadius: 100,
}

})