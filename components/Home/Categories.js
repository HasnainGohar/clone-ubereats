import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

 const item=[
    {
        image:require("../../assets/images/shopping-bag.png"),
        text:'Pick-up'
    },
    {
        image:require("../../assets/images/soft-drink.png"),
        text:'Soft-Drinks'
    },
    {
        image:require("../../assets/images/bread.png"),
        text:'Bakery Items'
    },
    {
        image:require('../../assets/images/fast-food.png'),
        text:'Fast Food'
    },
    {
        image:require("../../assets/images/deals.png"),
        text:'Deals'
    },
    {
        image:require('../../assets/images/coffee.png'),
        text:'Coffee & Tea'
    },
    {
        image:require('../../assets/images/desserts.png'),
        text:'Desserts'
    },
]

const Categories = () => {
  return (
    <View style={{marginTop:10,backgroundColor:'white',paddingVertical:5}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {
            item.map((item,index)=>{
                return(
                    <View  key={index} style={{marginRight:30,alignItems:'center'}} >
                        <Image 
                        style={{
                            width:50,
                            height:50,
                            resizeMode:'contain'
                        }}
                        source={item.image}/>
                        <Text
                        style={{ color:'black',fontSize:13,fontWeight:'900'}}
                        >{item.text}</Text>
                    </View>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default Categories