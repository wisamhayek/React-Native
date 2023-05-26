import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { NativeBaseProvider, Box } from "native-base";


export default function Home() {
  return (
    <NativeBaseProvider>
    <SafeAreaProvider>
        <DrawerNavigator />
    </SafeAreaProvider>
    </NativeBaseProvider>
  );
}