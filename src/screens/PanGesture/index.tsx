import React, { useState } from "react";
import { StyleSheet, View, LayoutRectangle } from "react-native";

import { default as PG } from "./PanGesture";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const PanGesture = () => {
  const [container, setContainer] = useState<LayoutRectangle | null>(null);

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent: { layout } }) => setContainer(layout)}
    >
      {container && <PG {...container} />}
    </View>
  );
};

export default PanGesture;
