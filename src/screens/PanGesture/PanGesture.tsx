import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { View, LayoutRectangle, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Card, { Cards, CARD_HEIGHT, CARD_WIDTH } from "../../components/Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
  },
});

const PanGesture = ({
  width: windowWidth,
  height: windowHeight,
}: LayoutRectangle) => {
  const { bottom: marginBottom } = useSafeAreaInsets();
  const boundX = windowWidth - CARD_WIDTH;
  const boundY = windowHeight - CARD_HEIGHT;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ translationX, translationY }) => {
      translateX.value = translationX;
      translateY.value = translationY;
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <View style={[styles.container, { marginBottom }]}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={[style]}>
          <Card card={Cards.Card4} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PanGesture;
