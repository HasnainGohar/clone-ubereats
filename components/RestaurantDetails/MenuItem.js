import { StyleSheet, View, Text, Image, Dimensions, ScrollView, FlatList } from 'react-native'
import React from 'react'

import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { Divider } from 'react-native-elements';

import { useDispatch } from 'react-redux';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const food = [
  {
    title: 'White Chicken',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img: 'https://img-global.cpcdn.com/recipes/faa0ca9b204f77c5/680x482cq70/white-chicken-karahi-recipe-main-photo.jpg'
  },
  {
    title: 'Chicken Karahi',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://www.whiskaffair.com/wp-content/uploads/2020/09/Kadai-Chicken-2-3.jpg'
  },
  {
    title: 'Fast Food',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg'
  },
  {
    title: 'White Chicken',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://img-global.cpcdn.com/recipes/faa0ca9b204f77c5/680x482cq70/white-chicken-karahi-recipe-main-photo.jpg'
  },
  {
    title: 'Chicken Karahi',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://www.whiskaffair.com/wp-content/uploads/2020/09/Kadai-Chicken-2-3.jpg'
  },
  {
    title: 'Fast Food',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg'
  },
  {
    title: 'Fast Food',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg'
  },
  {
    title: 'White Chicken',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://img-global.cpcdn.com/recipes/faa0ca9b204f77c5/680x482cq70/white-chicken-karahi-recipe-main-photo.jpg'
  },
  {
    title: 'Chicken Karahi',
    description: 'Amazing pakistanni dish with delicious taste',
    price: '$15',
    img:
      'https://www.whiskaffair.com/wp-content/uploads/2020/09/Kadai-Chicken-2-3.jpg'
  },

]



export default function MenuItem({ restaurantName }) {

  const dispatch = useDispatch()

    const selectedItems = (item, checkboxValue) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...item,
          restaurantName: restaurantName,
          checkboxValue: checkboxValue,
        },
      })
    }
  //   const cartItems=useSelector(
  //     (state)=>state.cartReducer.selectedItems.items
  // );
  // const isFoodInCart =(food,cartItem)=>{
  //     Boolean(cartItem.find((item=>item.title ===food.title)))
  // }
  return (

    <ScrollView>
      {
        food.map((item, index) => {
          return (
            < View key={index} >
              <View style={styles.menuItemStyle}>
                <BouncyCheckbox
                  fillColor='green'
                  onPress={(checkboxValue) => selectedItems(food, checkboxValue)}
                />

                <FoodInfo
                  food={item}
                />
                <FoodImage food={item} />
              </View>
              <Divider with={0.5} style={{ marginHorizontal: 20 }} />
            </View >

          )
        })

      }
    </ScrollView>
  )
}


export const FoodInfo = (props) => {
  return (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
      <Text style={styles.title}>{props.food.title}</Text>
      <Text style={styles.description}>{props.food.description} </Text>
      <Text style={styles.price}>{props.food.price} </Text>
    </View>
  )
}

export const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.img }}
    style={{
      height: height / 8,
      width: width / 4,
      borderRadius: 10,
      resizeMode: 'cover',
      position: 'absolute',
      right: 1,
    }}
  />
)

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    columnGap: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    marginBottom: 30,
  }
  , title: {
    fontSize: 19,
    fontWeight: "600",
  },
  description: {

  },
  price: {

  }
})