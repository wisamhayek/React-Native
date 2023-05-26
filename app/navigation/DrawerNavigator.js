import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import { AverageTabNavigator, ChanceTabNavigator, BottomTabNavigator } from "./TabNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="Chance" component={ChanceTabNavigator} />
      <Drawer.Screen name="Average" component={AverageTabNavigator} />
      <Drawer.Screen name="Profile" component={()=>(null)} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;


{/* <Drawer.Screen name="High Low" component={()=>(null)} />
<Drawer.Screen name="Send Ticket" component={()=>(null)} />
<Drawer.Screen name="Cart" component={()=>(null)} />
<Drawer.Screen name="Groups" component={()=>(null)} />
<Drawer.Screen name="Admin" component={()=>(null)} />
<Drawer.Screen name="Dashboard" component={()=>(null)} /> */}