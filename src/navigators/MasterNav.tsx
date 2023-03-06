import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import PanGesture from "../screens/PanGesture";
import Transition from "../screens/Transition";
import HigherOrderAnimation from "../screens/HigherOrderAnimation";

export type RootStackParamList = {
  Home: undefined;
  PanGesture: undefined;
  Transition: undefined;
  HigherOrderAnimation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MasterNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "React-Native Animation",
        }}
      />
      <Stack.Screen
        name="PanGesture"
        component={PanGesture}
        options={{
          title: "Pan Gesture",
        }}
      />
      <Stack.Screen
        name="Transition"
        component={Transition}
        options={{
          title: "Transition",
        }}
      />
      <Stack.Screen
        name="HigherOrderAnimation"
        component={HigherOrderAnimation}
        options={{
          title: "Higher Order Animation",
        }}
      />
    </Stack.Navigator>
  );
};

export default MasterNav;
