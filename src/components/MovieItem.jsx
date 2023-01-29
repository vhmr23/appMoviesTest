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
          <Image
            style={styles.logo}          
            source={{uri: `${IMAGE_URL}${item.poster_path ? item.poster_path : item.backdrop_path}`}}
          />
        </View>
        <View style={{ flex: 1}}>
          <TextStyles title>
          {item.title}
          </TextStyles>
          <TextStyles small>
          {item.release_date}
          </TextStyles>
        </View>
    </View>
  )
}