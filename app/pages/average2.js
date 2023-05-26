import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Average2 = () => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Average 2</Text>
      <Text style={styles.subtitle}>This is Average 2 page</Text>
    </View>
  </View>
);

export default Average2;

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