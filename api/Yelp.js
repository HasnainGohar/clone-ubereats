import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';
const API_KEY = 'cOJLhVt41y6e_NWCAUT_emOLPGx12urkO7925ADrFkP4rA9N_uany_urPAbV2oa1Bz6zkLSXww_aeHgDK1CNkzNBL1J9bYLTiDmGtGROJKb17GiNNODBc4_a65lKZHYx'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.yelp.com/v3/businesses/search?location=San+Francisco&categories=italian&term=restaurants',
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      );
      setRestaurants(response.data.businesses);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>Location: {item.location.address1}</Text>
    </View>
  );

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default RestaurantList;
