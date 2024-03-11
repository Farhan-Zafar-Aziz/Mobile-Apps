import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, } from 'react-native';
import { useState} from 'react';
import bgImg from './assets/mosque2.jpg';

export default function Counter() {
   const [readCount, updateCount] = useState(0)

   function increamentCounter() {
    updateCount(readCount + 1)
   }
   
   function resetCounter() {
    updateCount(readCount === 0)
   }

  //  function decreamentCounter() {
  //   updateCount(readCount - 0)
  //    }

  return (
    <ImageBackground source={bgImg}
     style={styles.container}>
        <View style={styles.back}>
        <Text style={styles.tasbeeh}>
            {readCount + 0}
          </Text>
        </View>
         <View style={styles.row}>

                                {/* reverse button  */}
             {/* <TouchableOpacity style={styles.butns} onPress={decreamentCounter}>
              <Text >
                 Reverse 
              </Text> */}

               <TouchableOpacity style={styles.butns} onPress={resetCounter}>
              <Text  style={styles.btn}>
                 Reset 
              </Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.butns} onPress={increamentCounter}>
              <Text  style={styles.btn}>
                 Count
              </Text>
             </TouchableOpacity>
             </View>
             <StatusBar style='light'></StatusBar>
             </ImageBackground>
    
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   },
  back: {
     width: 200,
     height: 200,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 100,
     marginTop: 100,
     borderWidth: 3,
     borderColor: 'white',
   },
  tasbeeh: {
    fontSize: 60,
    color: 'white',
   },
  row: {
   flexDirection: 'row',
   gap: 50,
   marginTop: 60,
   },
  butns: {
   width: 80,
   height: 80,
   borderWidth: 2,
   borderColor: 'white',
   borderRadius: 100,
   justifyContent: 'center',
   alignItems: 'center',
  },
btn: {
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  fontStyle: 'italic',
}
});