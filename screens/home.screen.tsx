import React from 'react';
import { StyleSheet, FlatList, SafeAreaView,Image,TouchableOpacity } from 'react-native';
import {View } from '../components/Themed';
import { useGetPopularMoviesQuery } from '../api/movieApi';
import { config } from '../config';
import { IMovieType } from '../types/movies.types';

export default function HomeScreen({ navigation }: any) {

  const movielist = useGetPopularMoviesQuery();
  console.log(movielist);
  const handlePage = (item: IMovieType) => {
    navigation.navigate("MovieDetails", {
      movieDetails: item
    });


  }

  return (

    <SafeAreaView style={styles.container}>
      {movielist?.data &&
        <FlatList
          data={movielist.data.results}
          renderItem={({ item }) => (
            <View style={styles.main}>
              <TouchableOpacity onPress={() => handlePage(item)}>
                <Image source={{
                  uri: `${config.POSTER_BASE_URL}/${item.poster_path}`,
                }}
                  resizeMode="cover"
                  style={{ width: "auto", height: 279 }} />

              </TouchableOpacity>
            </View>
          )
          }
          numColumns={2}
          keyExtractor={(item: IMovieType) => item.id?.toString()}
        />
      }
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    height: 279
  },
});
