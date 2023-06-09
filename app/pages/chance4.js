import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Chance4 = () => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Chance 4</Text>
      <Text style={styles.subtitle}>This is Chance 4 page</Text>
    </View>
  </View>
);

export default Chance4;

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