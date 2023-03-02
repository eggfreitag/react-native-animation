import React from "react";
import { SharedValue } from "react-native-reanimated";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Bubble from "./Bubble";

const { width: windowWidth } = Dimensions.get("window");
const width = windowWidth * 0.8;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width,
    height: width,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
  },
});

type ChatBubbleProps = {
  progress: SharedValue<number>;
};

const ChatBubble = ({ progress }: ChatBubbleProps) => {
  const bubbles = [1, 2, 3];
  const delta = 1 / bubbles.length;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {bubbles.map((_, index) => {
          const start = index * delta;
          const end = start + delta;

          return <Bubble key={index} {...{ progress, start, end }} />;
        })}
      </View>
    </View>
  );
};

export default ChatBubble;
