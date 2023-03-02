import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import StyleGuide from "../../constants";
import ChatBubble from "./ChatBubble";
import { useSharedValue } from "react-native-reanimated";

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
  const progress = useSharedValue(0);

  return (
    <View style={styles.container}>
      <ChatBubble {...{ progress }} />
      <Button
        title={play ? "stop" : "start"}
        onPress={() => setPlay((prev) => !prev)}
      />
    </View>
  );
};

export default HigherOrderAnimation;
