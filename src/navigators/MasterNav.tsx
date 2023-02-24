import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import PanGesture from "../screens/PanGesture";

export type RootStackParamList = {
  Home: undefined;
  PanGesture: undefined;
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
    </Stack.Navigator>
  );
};

export default MasterNav;