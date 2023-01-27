import { View, Text } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

export default function index() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Hola victor</Text>
    </View>
  )
}