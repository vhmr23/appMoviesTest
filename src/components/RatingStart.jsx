import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TextStyles from './styles/StylesText';

export default function RatingStart({ rating, votes }) {

    useEffect(() => {
        setStarRating(rating)
    }, [rating])
    
  const starRatingOptions = [1, 2, 3, 4, 5];

  const [starRating, setStarRating] = useState(null);

  const animatedButtonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.stars}>
          {starRatingOptions.map((option) => (
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(option)}
              onPressOut={() => handlePressOut(option)}
              onPress={() => setStarRating(option)}
              key={option}
            >
              <Animated.View style={animatedScaleStyle}>
                <MaterialIcons
                  name={starRating >= option ? 'star' : 'star-border'}
                  size={32}
                  style={starRating >= option ? styles.starSelected : styles.starUnselected}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View style={styles.textFlex}>
            <Text style={styles.heading}>{starRating}</Text>
            <TextStyles small strong>votos realizados: {votes}</TextStyles>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingRight: 10
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#aaa',
  },
  starSelected: {
    color: '#ffb300',
  },
  textFlex:{
    flexDirection: 'row',
  }
});
