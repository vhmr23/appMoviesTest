import React from 'react'
import HomeScreen from './src/screens/Index'
import DetailMovies from './src/screens/MovieDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailMovies" component={DetailMovies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}