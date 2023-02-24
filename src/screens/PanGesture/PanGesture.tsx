import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { View, LayoutRectangle, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Card, { Cards, CARD_HEIGHT, CARD_WIDTH } from "../../components/Card";
import { clamp } from "react-native-redash";

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
  const boundY = windowHeight - CARD_HEIGHT - marginBottom;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_event, context) => {
      context.x = translateX.value;
      context.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, context) => {
      translateX.value = clamp(translationX + context.x, 0, boundX);
      translateY.value = clamp(translationY + context.y, 0, boundY);
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
