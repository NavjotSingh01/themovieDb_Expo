import { StatusBar } from 'expo-status-bar';
import Icon from '@expo/vector-icons/Feather';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';
import { Provider } from "react-redux";
import {store} from './store';
import HomeScreen from './screens/home.screen';
import MovieDetails from './screens/movie-details.screen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from './types';
import { Text, View } from './components/Themed';


const Stack = createNativeStackNavigator<RootStackParamList>();


const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={headerStyle} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={headerStyle2} />
    </Stack.Navigator>
  )
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
          <StackNavigator/>
          <StatusBar />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}


const headerStyle = {
  title: 'Top Movies',
  headerStyle: { backgroundColor: "black" },
  headerTitleStyle: { color: "white" },
  headerRight: () => (<Icon name="more-vertical" size={25} color="white" style={{ paddingRight: 10 }} />),
  // headerLeft: () => (
  //   <Text>majot</Text>
  // ),
};

const headerStyle2 = {
  title: 'Movies Details',
  headerStyle: { backgroundColor: "black" },
  headerTitleStyle: { color: "white" },
  headerRight: () => (<Icon name="more-vertical" size={25} color="white" style={{ paddingRight: 10 }} />),
  // headerLeft: () => (
  //   <Text>majot</Text>
  // ),
};



