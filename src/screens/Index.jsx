import React from 'react'
import { View, Text } from 'react-native'
import Constants from 'expo-constants'
import MoviesList from '../components/MoviesList'

export default function Index({ navigation }) {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Hola victor</Text>
      <MoviesList />
    </View>
  )
}