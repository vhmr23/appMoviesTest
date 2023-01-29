import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import {  API_KEY, BASE_URL } from '../utils/api'
import axios from 'axios'
import MovieItem from './MovieItem'

export default function MobiesList({ navigation }) {
  
  const [listMovies, setListMovies] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=original_title.asc&include_adult=false&include_video=false&page=1`)
    .then((response) => {
      setListMovies(response.data.results)
    });
  }, [])

  return (
    <FlatList 
      data={listMovies}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('DetailMovies')}>
          <MovieItem item={item} />
        </TouchableOpacity>  
      )}
    />
  )
}