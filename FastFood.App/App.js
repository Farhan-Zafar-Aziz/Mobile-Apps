import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "react-native";

const CarApp = () => {
  return (
      <View style={styles.container}>
        <View style={styles.state}>
        <Image 
        source={{uri: ''}}
        style={styles.location}/>
        <Text>Karachi,Pakistan</Text>

        <View>
          <Text style={styles.heading}>Let's find a sport car for you</Text>

          <View>
            <Image 
            source={{uri: ''}}
            style={styles.searchIcon}/>
          <TextInput style={styles.search}>search</TextInput>
          </View>

          <View style={styles.inputRow}>
          <TouchableOpacity style={styles.search}>AUDI</TouchableOpacity>
          <TouchableOpacity style={styles.search}>Honda</TouchableOpacity>
          <TouchableOpacity style={styles.search}>BMW</TouchableOpacity>
          </View>

          <Text>New Cars</Text>

          <View style={styles.cardRow}>

           <Image 
           source={{uri: ''}}
           style={styles.carImg}/>

           <View style={styles.cardCol}>
            <Text>Car Name</Text>

            <View style={styles.locationPlace}>
              <Image source={{uri: ''}}
            style={styles.carLocationIcon}/>
            <Text>car location</Text>
            </View>

            <Text>Car Rating</Text>

            <TouchableOpacity>
              <Text>Buy</Text>

            </TouchableOpacity>
            

            
           </View>
          </View>
          </View>

        </View>

        <StatusBar style='dark'/>
      </View>
    )
}

export default CarApp;