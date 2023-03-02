import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StyleGuide from "../../constants";
import Animated, { SharedValue } from "react-native-reanimated";

const size = 32;

const styles = StyleSheet.create({
  bubble: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: StyleGuide.palette.primary,
  },
});

type BubbleProps = {
  progress: SharedValue<number>;
  start: number;
  end: number;
};

const Bubble = ({ progress, start, end }: BubbleProps) => {
  return <Animated.View style={[styles.bubble]} />;
};

export default Bubble;
