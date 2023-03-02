import React from "react";
import { mix } from "react-native-redash";
import { Dimensions, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import StyleGuide from "../../constants";
import Card, { TCard } from "../../components/Card";

const { width: windowWidth } = Dimensions.get("window");
const origin = -(windowWidth / 2 - StyleGuide.spacing * 2);

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: StyleGuide.spacing * 4,
  },
});

type AnimatedCardProps = {
  transition: Animated.SharedValue<number>;
  index: number;
  card: TCard;
};

const AnimatedCard = ({ transition, index, card }: AnimatedCardProps) => {
  const style = useAnimatedStyle(() => {
    // const rotate = interpolate(
    //   transition.value,
    //   [0, 1],
    //   [0, ((index - 1) * Math.PI) / 6]
    // );
    const rotate = mix(transition.value, 0, ((index - 1) * Math.PI) / 6);

    return {
      transform: [
        { translateX: origin },
        { rotate: `${rotate}rad` },
        { translateX: -origin },
      ],
    };
  });

  return (
    <Animated.View key={card} style={[styles.overlay, style]}>
      <Card {...{ card }} />
    </Animated.View>
  );
};

export default AnimatedCard;
