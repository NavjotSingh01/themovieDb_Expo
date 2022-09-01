import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Pressable, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { config } from '../config';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Layout from '../constants/Layout';


type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>

export default function MovieDetails(props:Props) {
  const { movieDetails } = props.route.params;

  const onPress = ()=>{

  }
  return (
    
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.header}>{movieDetails.title}</Text>

      <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }}>
        <View style={{ flexDirection: "column", width: '50%',marginRight:5 }}>
          <Image source={{
            uri: `${config.ORIGINAL_POSTER_BASE_URL}/${movieDetails.backdrop_path}`,
          }}
            resizeMode="cover"
            style={styles.image} />
        </View>
        <View style={{ flexDirection: "column", width: '50%',marginLeft:5  }}>
          <Text style={styles.year}>{movieDetails.release_date.slice(0, 4)}</Text>
          <Text style={styles.duration}>120 mins</Text>
          <Text style={styles.rating}>{movieDetails.vote_average}/10</Text>

          <Pressable style={styles.favButton} onPress={onPress}>
            <Text style={styles.btext}>Add To Favourite</Text>
          </Pressable>
        </View>

      </View>

      <View style={styles.getOverview}>
        <Text
          style={styles.getOverviewText}

        >
          {movieDetails.overview}
        </Text>
        <Text style={styles.trailer}>TRAILERS</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={styles.playtrailer}>
          <EvilIcons name="play" size={30} color="black" />
          <Text style={styles.playtrailertext}>Play Trailer 1</Text>
        </View>
        <View style={styles.playtrailer}>
          <EvilIcons name="play" size={30} color="black" />
          <Text style={styles.playtrailertext}>Play Trailer 2</Text>
        </View>


      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  playtrailertext: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 5,
    letterSpacing: 0.8,
    fontWeight: '500',
  },
  playtrailer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#FAFAFA',
    margin: 5
  },
  trailer: {
    textAlign: 'left',
    marginTop: 10,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: '#757575',

  },
  getOverview: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  getOverviewText: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#757575',
    fontWeight: '500',
  },
  image: {
    minWidth: 150,
    minHeight: 200,
    marginLeft: 40
  },
  container: {
    width: Layout.window.deviceWidth,
    height: Layout.window.deviceHeight,
  },
  header: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '500',
    backgroundColor: '#746A64',
    color: 'white',
    padding: 13,
    width: '100%'
  },
  separator: {
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 0.7,
    borderColor: "#DEDEDE",
  },
  year: {
    fontSize: 20,
  },
  duration: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5
  },
  rating: {
    fontWeight: 'bold',
    marginTop: 55
  },
  favButton: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 2,
    marginRight: 32,
    elevation: 3,
    backgroundColor: '#746A64',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
  },
  btext: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  }
});
