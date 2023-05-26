import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigator from "./navigation/DrawerNavigator";


export default function Home() {
  return (
    <SafeAreaProvider>
        <DrawerNavigator />
    </SafeAreaProvider>
  );
}