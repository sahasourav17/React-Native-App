import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import SectionTitle from "./SectionTitle";

export default function ArticlesForYou({ onPress }) {
  return (
    <View style={styles.container}>
      <SectionTitle title="Articles for you" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
