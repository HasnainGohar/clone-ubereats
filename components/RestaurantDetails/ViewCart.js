import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'

//navigation
import { useNavigation } from '@react-navigation/native'
//components
import OrderItem from './OrderItem'

//useSelector
// import { useSelector } from 'react-redux'

const ViewCart = () => {

    const navigation = useNavigation()


    // const items = useSelector((state) => state.cartReducer.selectedItems.items);
    // const total = items
    //     .map((item) => Number(item.price.replace('$', '')))
    //     .reduce((prev, curr) => prev + curr, 0);

    // const totalUSD = total.toLocaleString('en', {
    //     style: 'currency',
    //     currency: 'USD',
    // });

    // console.log(totalUSD);

    const [modalVisible, setModalVisible] = useState(false)

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>RestaurantName</Text>
                        <OrderItem />
                        <OrderItem />
                        <View style={styles.subTotalContainer}>
                            <Text style={styles.subTotalText}>Subtotal</Text>
                            <Text>$40</Text>
                        </View >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50 }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: 'black',
                                    width: '100%',
                                    padding: 11,
                                    borderRadius: 30
                                }}
                                activeOpacity={1}
                                onPress={() => (

                                    setModalVisible(false),
                                    navigation.navigate('OrderComplete')
                            )
                                }
                            >
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
            </>
        )
    }

return (
    <>
        {/* //{
        //         total ? ( */}
        <Modal
            animationType='slide'
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                zIndex: 999,
                bottom: 270,
                padding: 65
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                }} >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: 'black',
                        width: '100%',
                        flexDirection: 'row',
                        padding: 15,
                        borderRadius: 30,
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'

                    }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            textAlign: 'center'
                        }}
                    >
                        View Cart</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>$15</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* //         ) : (<></>)
        //     } */}

    </>
)
}

export default ViewCart

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
        color: 'black'
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,

    },
    subTotalText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10
    }
})