import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  return(
  <View style={styles.container}>
      <Text>home screen</Text>
    </View>
);
  }

const SearchScreen= () => {
  return(
  <View style={styles.container}>
      <Text>search screen</Text>
      <StatusBar style="auto" />
    </View>
);
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



