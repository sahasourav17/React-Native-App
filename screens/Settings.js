import React from "react";
import { Button, Text, View } from "react-native";
import { InfoCard } from "../components/InfoCard";
import { infoSharedData, preferencesData, testingData } from "../utils/data";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, marginTop: 20 }}>
      <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: "bold" }}>
        Information shared
      </Text>
      {infoSharedData &&
        infoSharedData.map((info) => {
          return (
            <InfoCard
              key={info.id}
              title={info.title}
              subtitle={info.subtitle}
              onPress={() => {
                console.log(`${info.title} button pressed`);
              }}
            />
          );
        })}

      <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: "bold" }}>
        Preferences
      </Text>
      {preferencesData &&
        preferencesData.map((preference) => {
          return (
            <InfoCard
              key={preference.id}
              title={preference.title}
              subtitle={preference.subtitle}
              onPress={() => {
                console.log(`${preference.title} button pressed`);
              }}
            />
          );
        })}

      <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: "bold" }}>
        Pilot testing
      </Text>
      {testingData &&
        testingData.map((data) => {
          return (
            <InfoCard
              key={data.id}
              title={data.title}
              subtitle={data.subtitle}
              onPress={() => {
                console.log(`${data.title} button pressed`);
              }}
            />
          );
        })}
    </SafeAreaView>
  );
}
