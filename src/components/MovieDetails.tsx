import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {MovieFull, Cast} from '../interfaces/MovieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {format} from 'currency-formatter';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={20}></Icon>
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginHorizontal: 20}}>
            {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>
        <Text style={{fontSize: 16, textAlign: 'justify', color: 'black'}}>
          {movieFull.overview}
        </Text>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        {movieFull.budget !== 0 ? (
          <Text style={{fontSize: 16, color: 'black'}}>
            {format(movieFull.budget, {code: 'USD'})}
          </Text>
        ) : (
          <Text style={{fontSize: 13}}>No especificado</Text>
        )}
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        {/* <CastItem actor={cast[0]}></CastItem> */}
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};

export default MovieDetails;
