import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView,} from 'react-native'
import {  API_KEY, BASE_URL, IMAGE_URL_PORTAL } from '../utils/api'
import axios from 'axios'
import RatingStart from '../components/RatingStart'
import TextStyles from '../components/styles/StylesText'
import MovieSimilar from '../components/MovieSimilar'

const MovieDetail = ({ route }) => {
  const { id } = route.params
  const [movie, setMovie] = useState({})
  const [genero, setGenero] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images`)
    .then((response) => {
      setMovie(response.data)
    });
  }, [id])
  
  if(movie.genres === undefined || movie.genres === null){return null}

  return (
    <ScrollView>
      <View style={styles.containerRow}>
        <ImageBackground
          style={styles.postal}          
          source={{uri: `${IMAGE_URL_PORTAL}${movie.poster_path}`}}
          resizeMode="cover"
        >
          <View style={{ paddingTop: 100}}>
            <Text style={styles.text}>{movie.title}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.containerRow}>
        <View style={{ flexDirection: 'column'}}>
          <View style={styles.container}>
            <RatingStart rating={movie.vote_average} votes={movie.vote_count}/>
          </View>
        </View>
        <View style={{ flexDirection:'column'}}>
          <View style={{ paddingTop: 30}}>
            <TextStyles middle strong>Fecha: {movie.release_date}</TextStyles>
            <TextStyles middle strong>
              Genero: {movie.genres.map(genre => (
                <TextStyles middle>{genre.name +' '}</TextStyles>
              ))}
            </TextStyles>
          </View>
        </View>
      </View>
      <View style={{ padding: 20, paddingTop:10 }}>
        <TextStyles big strong>Descripción: </TextStyles>
        <TextStyles middle>{movie.overview}</TextStyles>
      </View>
      <View style={{ paddingTop: 20}}>
        <MovieSimilar movieId={id}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 38,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  postal: {
    width: 400,
    height: 400,
    borderRadius:4,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingBottom: 0,
    paddingTop: 0,
    flexDirection: 'row',
  },
  containerRow: {
    flexDirection: 'row',
  }
})

export default MovieDetail