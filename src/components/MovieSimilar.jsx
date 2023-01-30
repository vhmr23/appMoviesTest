import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import {  API_KEY, BASE_URL, IMAGE_URL } from '../utils/api'
import axios from 'axios'

const MovieSimilar = ({ movieId }) => {

    useEffect(() => {
        axios.get(`${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then((response) => {
            console.log(response.data)
        });
    }, [])

  return (
    <View>
      <Text>MovieSimilar</Text>
    </View>
  )
}

export default MovieSimilar