import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navigation/Navigation'

//Redux
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/Store'
const store =configureStore();

const App = () => {

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ReduxProvider>

  )
}

export default App

const styles = StyleSheet.create({})