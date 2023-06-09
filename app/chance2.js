import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
import Profile from "./screens/profile";
import HomeScreen from "./screens/homeScreen";

const Stack = createNativeStackNavigator();

const Chance2 = () => (  
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
  // <View style={styles.container}>
  //   <View style={styles.main}>
  //     <Text style={styles.title}>Chance 2</Text>
  //     <Text style={styles.subtitle}>This is Chance 2 page</Text>
  //   </View>
  // </View>
);

export default Chance2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});