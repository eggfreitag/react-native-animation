import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigators/MasterNav";

const animations = [
  { screen: "PanGesture", title: "🙈 Pan Gesture" },
  { screen: "Transition", title: "🐱 Transition" },
  { screen: "HigherOrderAnimation", title: "😱 Higher Order Animation" },
] as const;

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: "white",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#f2f2f2",
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },
});

const Home = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {animations.map((thumbnail) => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigation.navigate(thumbnail.screen)}
        >
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{thumbnail.title}</Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
};

export default Home;
