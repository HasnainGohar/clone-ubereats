import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import AnimatedLottieView from 'lottie-react-native'

//divider
import { Divider } from 'react-native-elements'

//component
import { FoodInfo } from '../../components/RestaurantDetails/MenuItem'
import { FoodImage } from '../../components/RestaurantDetails/MenuItem'
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
]

const OrderComplete = () => {
    return (
        <View style={styles.OrderCompleteContainer}>
            <AnimatedLottieView
                style={{ height: 150, alignSelf: 'center', marginBottom: 30 }}
                source={require('../../assets/animations/check-mark.json')}
                autoPlay
                speed={0.5}
                loop={true}
            />
            <Text style={{ fontWeight: '600', color: 'rgba(0,0,0,0.4)', textAlign: 'center' }}>your order At restaurant has been placed for $40</Text>
            <View style={{ padding: 20 }}>
                <ScrollView>
                    {
                        food.map((item, index) => {
                            return (
                                < View key={index} >
                                    <View style={styles.menuItemStyle}>
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
            </View>
            <AnimatedLottieView
                style={{ height: 150, alignSelf: 'center', marginBottom: 30 }}
                source={require('../../assets/animations/cooking.json')}
                autoPlay
                speed={0.5}
                loop={true}
            />
        </View>
    )
}

export default OrderComplete

const styles = StyleSheet.create({
    OrderCompleteContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    menuItemStyle: {
        flexDirection: 'row',
        columnGap: 10,
        marginVertical: 20,
        marginHorizontal: 10,
        marginBottom: 30,
    }
})