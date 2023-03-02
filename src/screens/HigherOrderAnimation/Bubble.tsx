import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { mix } from "react-native-redash";

import StyleGuide from "../../constants";

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
  index: number;
};

const Bubble = ({ progress, start, end, index }: BubbleProps) => {
  console.log(`${index}의 start: ${start}, end: ${end}`, progress.value);
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      progress.value,
      [start, end],
      [1, 1.5],
      Extrapolate.CLAMP
    );

    return { opacity, transform: [{ scale }] };
  });
  return <Animated.View style={[styles.bubble, animatedStyles]} />;
};

export default Bubble;
