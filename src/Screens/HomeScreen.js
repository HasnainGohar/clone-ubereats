import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
//navigation
import { useNavigation } from '@react-navigation/native';

//Axios
import axios from 'axios';

//divider
import { Divider } from 'react-native-elements';

//Screens
import HeaderTab from '../../components/Home/HeaderTab'
import SearchBar from '../../components/Home/SearchBar'
import Categories from '../../components/Home/Categories'
import ResturantItem from '../../components/RestaurantDetails/ResturantItem'
import BottomTab from '../../components/Home/BottomTab'

//Api key
const API_KEY = 'cOJLhVt41y6e_NWCAUT_emOLPGx12urkO7925ADrFkP4rA9N_uany_urPAbV2oa1Bz6zkLSXww_aeHgDK1CNkzNBL1J9bYLTiDmGtGROJKb17GiNNODBc4_a65lKZHYx'

const HomeScreen = () => {

    const navigation = useNavigation();

    const [restaurantData, setRestaurantData] = useState([]);
    const [city, setCity] = useState('San francisco');

    const fetchData = async () => {
        const response = await axios.get(
            `https://api.yelp.com/v3/businesses/search?location=${city}&term=restaurants`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            },
        );
        return setRestaurantData(response.data.businesses);
        
    };

    useEffect(() => {

        fetchData();
    }, [city])

    const handleCityChange = (text) => {
        setCity(text);
    }

    const handleCitySubmit = () => {
        fetchData();
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }} >
                <HeaderTab />
                <SearchBar city={city} cityHandler={setCity} handleCityChange={handleCityChange} handleCitySubmit={handleCitySubmit} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ResturantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTab />
        </SafeAreaView>
    )
}

export default HomeScreen
