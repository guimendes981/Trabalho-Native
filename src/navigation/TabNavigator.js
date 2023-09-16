import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginForm from "../components/LoginForm";
import Home from "../components/Home";
import RandomCard from "../components/RandomCard";
import CardSets from "../components/CardSets";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginForm} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="RandomCard" component={RandomCard} />
      <Tab.Screen name="CardSets" component={CardSets} />
    </Tab.Navigator>
  );
}
