import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {URl_FOR_IMAGES} from '../api/movieService';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
const height = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const imageURL = `${URl_FOR_IMAGES}${movie.poster_path}`;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageURL}} style={styles.posterImage}></Image>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
        {/* <Text style={styles.overview}>{movie.overview}</Text> */}
      </View>

      {/* <Icon name="star-outline" color="grey" size={20}></Icon> */}
      {isLoading ? (
        <ActivityIndicator size={35} color={'grey'} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon color="white" name="arrow-back-outline" size={60} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: height * 0.7,
    width: '100%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25
  },
  posterImage: {
    flex: 1,
    resizeMode: 'stretch',
    // width: undefined,
    // height: undefined
    // borderBottomLeftRadius: 100,
    // borderBottomRightRadius: 100,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  overview: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    marginTop: 15,
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 5,
  },
});

export default DetailScreen;
