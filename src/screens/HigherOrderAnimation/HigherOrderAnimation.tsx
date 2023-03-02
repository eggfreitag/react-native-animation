import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

import StyleGuide from "../../constants";
import ChatBubble from "./ChatBubble";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: StyleGuide.palette.background,
    marginBottom: StyleGuide.spacing * 3,
  },
});

const HigherOrderAnimation = () => {
  const [play, setPlay] = useState(false);
  const paused = useSharedValue(!play);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withPause(
      withRepeat(withTiming(1, { duration: 1000 }), -1, true),
      paused
    );
  }, [progress]);

  return (
    <View style={styles.container}>
      <ChatBubble {...{ progress }} />
      <Button
        title={play ? "stop" : "start"}
        onPress={() => {
          setPlay((prev) => !prev);
          paused.value = !paused.value;
        }}
      />
    </View>
  );
};

export default HigherOrderAnimation;
