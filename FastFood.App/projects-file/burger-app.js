import { StatusBar } from 'react-native';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';


function Resturant() {

  var coverImg = 'https://img.pikbest.com/backgrounds/20210825/fast-food-propaganda-black-creative-banner_6112712.jpg!bw700'
  var burgerImg = 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg';

  var obj = [
    {
      title: 'Burger',
      price: '300',
      img: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
    },
    {
      title: 'Pizza',
      price: '500',
      img: 'https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg',
    },
    {
      title: 'Sandwich',
      price: '250',
      img: 'https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg',
    },  
    {
      title: 'Broast',
      price: '400',
      img: 'https://funcooking.co.uk/wp-content/uploads/2016/03/Crispy-Broast-68.jpg',
    },
  ];

  var obj1 = [
    {
      title1: 'Kabab',
      price1: '100',
      img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvCHMekYnQTGEmGoq5e-aswbgA1EP9qRugkBpQvkhrw&s',
    },
    {
      title1: 'Noodles',
      price1: '150',
      img1: 'https://t3.ftcdn.net/jpg/06/10/03/82/360_F_610038219_jVhQanmTK0WUw2NO0lPhQBUqdQiLzTOs.jpg',
    },
    {
      title1: 'Macroni',
      price1: '200',
      img1: 'https://vanitascorner.com/wp-content/uploads/2023/04/Masala-Macaroni-VC.jpg',
    }, 
    {
      title1: 'BBQ',
      price1: '350',
      img1: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Grilled-BBQ-Skewers-with-Pineapples-and-Lemons.jpg',
    },
  ];

  return (

    <SafeAreaView style={styles.container}>
      <Image source={{ uri: coverImg }}
      style={{width: '100%', height: 200, marginTop: 20}}/>
      
    <View>
      <Text style={styles.name}> Top Items</Text>
    </View>
    
   <ScrollView>
   <ScrollView horizontal>

  <View
   style={styles.row}>
     {obj.map(item => {
  return (
    <TouchableOpacity style={styles.card}>
    <Image 
    source={{uri: item.img}}
    style={styles.item}/>
  <Text style={styles.detail}>{item.title}</Text>
  <Text style={styles.detail}>Price {item.price}</Text>
  </TouchableOpacity>
  
  )
})}jec
</View> 
</ScrollView>

<View>
  <Text style={styles.name}>Popular Items</Text>
      </View>

      <ScrollView horizontal>
<View style={styles.row}>
{obj1.map(item1 => {
  return (
    <TouchableOpacity style={styles.card}>
    <Image 
    source={{uri: item1.img1}}
    style={styles.item}/>
  <Text style={styles.detail}>{item1.title1}</Text>
  <Text style={styles.detail}>Price {item1.price1}</Text>
  
  </TouchableOpacity>
  
  )
})}
</View> 
      </ScrollView>
      </ScrollView>
      <StatusBar style="light"></StatusBar>
    </SafeAreaView>
   
  )
};
      {/* <View style={styles.footer}>
        <Image style={styles.icons}
          source={{uri: 'https://i.pinimg.com/474x/71/89/88/718988215800391b6050182a28ca6810.jpg'}}/>
          <Text style={{color: 'white', fontSize: 12}}>Home</Text>

          <Image style={styles.icons}
          source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/016/293/270/small/discount-dark-mode-glyph-ui-icon-special-offer-for-customers-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg'}}/>
          <Text style={{color: 'white', fontSize: 12}}>Offer</Text>

          <Image style={styles.icons}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlTlz-pls1fyZ5p-4GWKwLBHQJwNGmQ39MNWl9xoRlQhQ_QN7HvDB6KRVz-IMfguFXKA&usqp=CAU'}}/>
          <Text style={{color: 'white', fontSize: 12}}>Search</Text>

          <Image style={styles.icons}
          source={{uri: 'https://as2.ftcdn.net/v2/jpg/02/35/60/77/1000_F_235607729_MGXKiX6H7jLw7jE7vokUaSMiVj4yFjjR.jpg'}}/>
          <Text style={{color: 'white', fontSize: 12}}>Delivery</Text>

          <Image style={styles.icons}
          source={{uri: 'https://i.pinimg.com/originals/4c/8b/44/4c8b44e9005f70feeb7fe01aedf475c6.jpg'}}/>
          <Text style={{color: 'white', fontSize: 12}}>Settings</Text>
      </View> */}


                          {/* cards */}
      {/* <TouchableOpacity style={styles.card}>
        <Image 
        source={{ uri: burgerImg }}
        style={styles.item}/>
      <Text style={styles.detail}>Burger</Text>
      <Text style={styles.detail}>Price: 300</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Image 
        source={{ uri: burgerImg }}
        style={styles.item}/>
      <Text style={styles.detail}>Burger</Text>
      <Text style={styles.detail}>Price: 300</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Image 
        source={{ uri: burgerImg }}
        style={styles.item}/>
      <Text style={styles.detail}>Burger</Text>
      <Text style={styles.detail}>Price: 300</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Image 
        source={{ uri: burgerImg }}
        style={styles.item}/>
      <Text style={styles.detail}>Burger</Text>
      <Text style={styles.detail}>Price: 300</Text>
</TouchableOpacity>*/}
      {/* </View> 
      </ScrollView>
      <StatusBar style="light"></StatusBar>
    </SafeAreaView>
   
  )
}; */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  name: {
    color: '#E56B13',
    textAlign: 'center',
    fontSize: 24,
    margin: 20,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    gap: 18,
  },
  card: {
  //  width: '45%',
  width: 200,
  height: 200,
   borderWidth: 1,
   borderRadius: 4,
   marginBottom: 16,
  //  marginLeft: '3.3%',
   padding: 8,
   borderColor: 'white',
  },
item: {
  width: '100%',
   height: 120,
  
  },
  detail: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    paddingLeft: 6,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#222'
  },
  icons: {
    width: 20,
    flexDirection: 'column',
    height: 30,

  }
})

export default Resturant;