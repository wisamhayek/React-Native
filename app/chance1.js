// import { useNavigation } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Chance1 = ({ navigation }) => {
  // const navigation = useNavigation();

  // const handleGoBack = () => {
  //   navigation.goBack();
  // };

return(
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Chance 1</Text>
      <Text style={styles.subtitle}>This is Chance 1 page</Text>
      <Button title="Go Back" onPress={()=>(navigation.navigate('Chance1'))} />
    </View>
  </View>
)
};

export default Chance1;

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