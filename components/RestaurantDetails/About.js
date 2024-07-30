import { Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function About(props) {

    const { name, image, price, review, rating, categorise, } = props.route.params;
    console.log(props.route.params ,'this is a detail of cove in about')
    // const formattedCategorise= categorise.map((cat)=>cat.title).join('-')
    const description = `${categorise} ${price ? '-' + price : ''} - 🎫 - ${rating} ⭐(${review}+)`
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}


// -- Sub Components --

const RestaurantImage = (props) => {
    return (
        <Image
            source={{ uri: props.image }}
            style={{ height: height / 4, width: '100%' }}
        />
    )
}

const RestaurantName = (props) => {
    return (
        <Text
            style={{
                fontSize: 24,
                fontWeight: '600',
                marginTop: 10,
                marginHorizontal: 15,
            }}
        >
            {props.name}
        </Text>
    )
}

const RestaurantDescription = (props) => {
    return (
        <Text
            style={{
                marginHorizontal: 15,
                fontSize: 13.5,
                fontWeight: '400'
            }}
        >
            {props.description}
        </Text>
    )
}
