import React from "react";
import Animated, {
  withDecay,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { clamp, withBouncing } from "react-native-redash";
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
  const boundY = windowHeight - CARD_HEIGHT - marginBottom;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, context) => {
      context.x = translateX.value;
      context.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, context) => {
      translateX.value = clamp(translationX + context.x, 0, boundX);
      translateY.value = clamp(translationY + context.y, 0, boundY);
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateX.value = withBouncing(
        withDecay({
          velocity: velocityX,
        }),
        0,
        boundX
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: velocityY,
        }),
        0,
        boundY
      );
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
        <Animated.View {...{ style }}>
          <Card card={Cards.Card4} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PanGesture;
