import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import TextStyles from './styles/StylesText'
import { IMAGE_URL } from '../utils/api'

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    borderRadius:4
  },
  container: {
    padding: 30,
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
  },
});

export default function MovieItem({ item }) {
  
  return (
    <View key={item.id} style={styles.container}>
        <View style={{ paddingRight: 10}}>
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
        <View style={{ flex: 1}}>
          <TextStyles title>
            Titulo: {item.title}
          </TextStyles>
          <TextStyles middle strong>
            Votos: {item.vote_average}
          </TextStyles>
          <TextStyles small>
            Fecha de estreno: {item.release_date}
          </TextStyles>
        </View>
    </View>
  )
}