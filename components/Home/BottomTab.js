import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
const BottomTab = () => {
    return (
        <View style={{ height: 60, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 15, marginBottom: 8 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='home' size={25} color='black' />
                <Text style={styles.bottomText}>Home</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='search' size={25} color='black' />
                <Text style={styles.bottomText}>Browser</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='shopping-bag' size={25} color='black' />
                <Text style={styles.bottomText}>Grocery</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='receipt' size={25} color='black' />
                <Text style={styles.bottomText}>Order</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='user' size={25} color='black' />
                <Text style={styles.bottomText}>User</Text>
            </View>
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    bottomText: {
        color: 'black',
        fontWeight: '400',
    }
})