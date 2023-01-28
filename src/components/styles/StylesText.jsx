import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#000',
    },
    strong: {
        fontWeight: 'bold',
    },
    big: {
        fontSize: 20,
    },
    small: {
        fontSize: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default function TextStyles({ children, text, strong, big, small, title }) { 
    const textStyles = [
        styles.text,
        strong && styles.strong,
        big && styles.big,
        small && styles.small,
        title && styles.title,
    ]

    return (
        <Text style={textStyles}>
        {children}
        </Text>
    )
}