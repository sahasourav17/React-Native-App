import React from "react";
import { Button, Pressable, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import ImageSlider from "../components/ImageSlider";
import ChallengesForYou from "../components/ChallengesForYou";
import ArticlesForYou from "../components/ArticlesForYou";

const onPress = () => {
  console.log("Pressed");
};

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={{ fontFamily: "WixMadeforText-Regular" }}>
            Mon, 26 Aug
          </Text>
          <Text style={styles.textStyle}>Morning Brian</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progressTextContainer}>
            <Text
              style={{
                fontFamily: "WixMadeforText-Bold",
                fontSize: 16,
                fontWeight: "700",
                color: "#20303C",
                lineHeight: 28,
              }}
            >
              Keep pushing! (0/2)
            </Text>
            <Pressable onPress={() => console.log("View Week btn pressed")}>
              <Text
                style={{
                  fontFamily: "WixMadeforText-Bold",
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#116DFF",
                  lineHeight: 28,
                }}
              >
                View week
              </Text>
            </Pressable>
          </View>
          <Progress.Bar
            progress={0.3}
            width={null}
            unfilledColor="#E8ECF0"
            borderWidth={0}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <ImageSlider
            btnText={"Read report"}
            imageSrc={require("../assets/athlete1.png")}
            onPress={onPress}
          />
        </View>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="refresh" size={24} color="#116DFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Connect Apple Health</Text>
          </View>
        </TouchableOpacity>
        <ChallengesForYou onPress={onPress} />
        <ArticlesForYou onPress={onPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "column",
    marginTop: 10,
  },
  titleContainer: {
    // padding: 20,
  },
  textStyle: {
    fontFamily: "WixMadeforText-Bold",
    fontSize: 20,
    lineHeight: 24,
    color: "#20303C",
    // fontWeight: "700",
  },
  progressContainer: {
    flexDirection: "column",
    gap: 16,
    marginVertical: 20,
  },
  progressTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginVertical: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginLeft: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: "WixMadeforText-Bold",
    color: "#116DFF",
  },
});
