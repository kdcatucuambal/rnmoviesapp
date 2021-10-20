import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {URl_FOR_IMAGES} from '../api/movieService';
import {Movie} from '../interfaces/MovieInterface';
import {RootStackParams} from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  marginHorizontal = 0,
}: Props) => {
  const imageURL = `${URl_FOR_IMAGES}${movie.poster_path}`;
  const {navigate} = useNavigation<HomeScreenNavigationProp>();
  return (
    // <TouchableOpacity
    //   activeOpacity={0.8}
    //   onPress={() => navigate('DetailScreen', movie)}
    //   style={{
    //     width,
    //     height,
    //     // marginHorizontal: 5,
    //     // paddingVertical: 3,
    //     // paddingHorizontal: 7,
    //     //borderRadius: 7,
    //     // backgroundColor: "red",
    //     padding: 5,
    //   }}>
    //   <View style={styles.imageContainer}>
    //     <Image source={{uri: imageURL}} style={styles.image} />
    //   </View>
    // </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('DetailScreen', movie)}
      style={{
        width,
        height,
        marginHorizontal,
        padding: 2,
        ...styles.touchable
      }}>
      <View style={{...styles.imageContainer}}>
        <Image source={{uri: imageURL}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "stretch"
  },
  imageContainer: {
    flex: 1,
  },
  touchable: {
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 7,

    elevation: 4
  },
});
