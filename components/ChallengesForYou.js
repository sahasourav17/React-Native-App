import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { InfoCard } from "./InfoCard";
import { challengesForYou } from "../utils/data";
import SectionTitle from "./SectionTitle";

export default function ChallengesForYou({ onPress }) {
  return (
    <View style={styles.container}>
      <SectionTitle title="Challenges for you" onPress={onPress} />
      {challengesForYou &&
        challengesForYou.map((challenge) => {
          return (
            <InfoCard
              key={challenge.id}
              title={challenge.title}
              subtitle={challenge.subtitle}
              onPress={() => {
                console.log(`${challenge.title} button pressed`);
              }}
            />
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
