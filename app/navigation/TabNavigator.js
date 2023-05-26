import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Chance4 from "../pages/chance4";
import Chance3 from "../pages/chance3";
import Chance2 from "../pages/chance2";
import Chance1 from "../pages/chance1";

import Average4 from "../pages/average4";
import Average3 from "../pages/average3";
import Average2 from "../pages/average2";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={MainStackNavigator} />
      <Tab.Screen name="Cart" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

const ChanceTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chance 1" component={Chance1} />
      <Tab.Screen name="Chance 2" component={Chance2} />
      <Tab.Screen name="Chance 3" component={Chance3} />
      <Tab.Screen name="Chance 4" component={Chance4} />
    </Tab.Navigator>
  );
};

const AverageTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Average 2" component={Average2} />
      <Tab.Screen name="Average 3" component={Average3} />
      <Tab.Screen name="Average 4" component={Average4} />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator, ChanceTabNavigator, AverageTabNavigator }