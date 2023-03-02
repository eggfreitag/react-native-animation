import {
  withSpring,
  withTiming,
  useSharedValue,
  useDerivedValue,
  WithSpringConfig,
  WithTimingConfig,
} from "react-native-reanimated";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";

import StyleGuide from "../../constants";
import AnimatedCard from "./AnimatedCard";
import { cards } from "../../components/Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-end",
    paddingBottom: StyleGuide.spacing * 3,
  },
});

/**
 *
 * @function useSpring
 * @param state 리액트 스테이트
 * @param config 설정
 * @returns useDerivedValue를 통해 리턴되는 값
 */
const useSpring = (state: React.ComponentState, config: WithSpringConfig) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);

  return useDerivedValue(() => {
    return withSpring(value.value, config);
  });
};

/**
 *
 * @function useTiming
 * @param state 리액트 스테이트
 * @param config 설정
 * @returns useDerivedValue를 통해 리턴되는 값
 */
const useTiming = (state: React.ComponentState, config?: WithTimingConfig) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = typeof state === "number" ? state : state ? 1 : 0;
  }, [state, value]);

  return useDerivedValue(() => {
    return withTiming(value.value, config);
  });
};

const Transition = () => {
  const [toggled, setToggled] = useState(false);
  // const transition = useTiming(toggled, { duration: 600 });
  const transition = useSpring(toggled, { damping: 12 });

  return (
    <View style={styles.container}>
      {cards.slice(2, 5).map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        title={toggled ? "Reset" : "Transition"}
        onPress={() => setToggled((prev) => !prev)}
      />
    </View>
  );
};

export default Transition;
