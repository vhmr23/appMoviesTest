import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {  API_KEY, BASE_URL, IMAGE_URL } from '../utils/api'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import TextStyles from './styles/StylesText'

const MovieSimilar = ({ movieId }) => {

    const [similarMovies, setSimilarMovies] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        axios.get(`${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then((response) => {
            setSimilarMovies(response.data.results)
        });
    }, [])

  return (
    <View>
      <TextStyles title style={{ paddingBottom: 30 }}> Movies similares:</TextStyles>
        <FlatList 
          data={similarMovies}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.container} 
              onPress={() => navigation.navigate('DetailMovies', {id : item.id} )}
            >
              <View key={item.id} >
                <View style={styles.ImageContainer}>
                  { item.poster_path === null ?
                    <Image
                    style={styles.logo}          
                    source={ require('../../assets/image-defualt.png')}
                    />
                    :
                    <Image
                    style={styles.logo}          
                    source={{
                      uri: `${IMAGE_URL}${item.poster_path }`}}
                    />
                  }
                </View>
                <View>
                  <Text middle>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
              
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  ImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius:4
  },
})

export default MovieSimilar 