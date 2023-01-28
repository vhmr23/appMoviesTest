import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextStyles from './styles/StylesText'

export default function MovieItem({ item }) {
  return (
    <View key={item.id} style={styles.container}>
        <TextStyles title>
        {item.title}
        </TextStyles>
        <TextStyles small>
        {item.release_date}
        </TextStyles>
        <TextStyles small>
        {item.poster_path}
        </TextStyles>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingBottom: 5,
        paddingTop: 5,
    },
})