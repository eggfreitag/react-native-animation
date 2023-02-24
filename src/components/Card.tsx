import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { width: windowWidth } = Dimensions.get("window");
const cardRatio = 228 / 362;

export const CARD_WIDTH = windowWidth * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * cardRatio;
export const assets = [
  require("../assets/card1.png"),
  require("../assets/card2.png"),
  require("../assets/card3.png"),
  require("../assets/card4.png"),
  require("../assets/card5.png"),
  require("../assets/card6.png"),
];

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
});

export const Cards = {
  Card1: 0,
  Card2: 1,
  Card3: 2,
  Card4: 3,
  Card5: 4,
  Card6: 5,
};

type CardProps = {
  card: typeof Cards[keyof typeof Cards];
};

const Card = ({ card }) => <Image style={styles.card} source={assets[card]} />;

export default Card;
