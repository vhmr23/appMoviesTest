import React from 'react'
import HomeScreen from './src/pages'
import DetailMovies from './src/pages/MovieDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailMovies" component={DetailMovies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}