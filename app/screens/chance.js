import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import {Link} from "expo-router";
import {Chance1} from "../chance1"
import {Chance2} from "../chance2"
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Chance = ({ navigation }) => {

// const navigation = useNavigation();

// const handleButtonPress = () => {
//   navigation.navigate('chance1');
// };

return (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Choose Chance Game</Text>
      <Link href="/chance1">Box Chance 1</Link>
      <Button title="Go to Pages / Chance 1" onPress={()=>(navigation.navigate('/pages/chance1'))} />
      <Button title="Go to Chance 2 Page" onPress={()=>(navigation.navigate('chance2'))} />
      <Button title="Go to Profile Page" onPress={()=>(navigation.navigate('Profile'))} />
      <Text style={styles.subtitle}>Box Chance 1</Text>
      <Text style={styles.subtitle}>Box Chance 2</Text>
      <Text style={styles.subtitle}>Box Chance 3</Text>
      <Text style={styles.subtitle}>Box Chance 4</Text>
    </View>
  </View>
)
};

export default Chance;

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