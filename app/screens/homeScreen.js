import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subtitle}>This is the first page of your app.</Text>
      <Button title="Go to About Screen" onPress={() => navigation.navigate("About")} />
    </View>
  </View>
);

export default HomeScreen;

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