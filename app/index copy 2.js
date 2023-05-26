import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/homeScreen";
import Chance from "./screens/chance.js";
import Profile from "./screens/profile";
// import Chance1 from "./screens/chance1.js";
import Chance1 from "./chance1.js";
import Chance2 from "./chance2.js";

// import { NavigationContainer } from "@react-navigation/native";
// import { MainStackNavigator } from "./navigation/StackNavigator";
// import BottomTabNavigator from "./navigation/TabNavigator";

import DrawerNavigator from "./navigation/DrawerNavigator";


export default function Home() {

  // const Drawer = createDrawerNavigator();

  return (
    <SafeAreaProvider>
      {/* <NavigationContainer> */}
        {/* <MainStackNavigator /> */}
        {/* <BottomTabNavigator /> */}
        <DrawerNavigator />
      {/* </NavigationContainer> */}
        {/* <Drawer.Navigator initialRouteName="Home" useLegacyImplementation={true}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Chance" component={Chance} />
          <Drawer.Screen name="Chance1" component={Chance1} />
          <Drawer.Screen name="Chance2" component={Chance2} />
          <Drawer.Screen name="Average" component={Chance1} />
          <Drawer.Screen name="High Low" component={Chance1} />
          <Drawer.Screen name="Cart" component={Chance1} />
        </Drawer.Navigator> */}
    </SafeAreaProvider>
  );
}

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
