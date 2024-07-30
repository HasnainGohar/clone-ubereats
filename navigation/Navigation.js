import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigations
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../src/Screens/HomeScreen'
import RestaurantDetails from '../src/Screens/RestaurantDetails'


import ViewCart from '../components/RestaurantDetails/ViewCart'
import OrderComplete from '../src/Screens/OrderComplete'

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    const screenOptions = {
        headerShown: false
    }
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
            <Stack.Screen name='Viewcart' component={ViewCart} />
            <Stack.Screen name='OrderComplete' component={OrderComplete} />
        </Stack.Navigator>
    )
}

export default Navigation

const styles = StyleSheet.create({})