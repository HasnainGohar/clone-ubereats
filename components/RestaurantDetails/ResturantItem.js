import React from 'react'

//react native
import { View, Text, Image, TouchableOpacity } from 'react-native'

// import { Divider } from 'react-native-elements'



//Icons
import HeartIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ResturantItem({ navigation, ...props }) {

    return (
        <View>
            {
                props.restaurantData.map((restaurant, index) => {
                    return (
                        <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 15 }}
                            onPress={() => navigation.navigate('RestaurantDetails', {
                                name: restaurant.name,
                                image: restaurant.image_url,
                                price: restaurant.price,
                                review: restaurant.review_count,
                                rating: restaurant.rating,
                                categorise: restaurant.categorise,
                            })} >
                            {
                                <View key={index} >
                                    <View style={{ marginTop: 10, padding: 10, backgroundColor: 'white' }}>
                                        <ResturantImage image={restaurant.image_url} />
                                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                                    </View>
                                </View>
                            }
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

//Image Component
const ResturantImage = (props) => (
    <View>
        <Image source={{
            uri: props.image
        }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
            <HeartIcon name='heart-outline' size={30} color='white' />
        </TouchableOpacity>
    </View>
);

// Info Component
const RestaurantInfo = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, color: 'black' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 .min</Text>
        </View>
        <View
            style={{
                backgroundColor: '#eee',
                borderRadius: 50,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text style={{ color: 'black' }}>{props.rating}</Text>
        </View>
    </View>
)
