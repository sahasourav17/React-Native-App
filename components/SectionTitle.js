import React from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text, View } from "react-native";

export default function SectionTitle({ title, onPress }) {
  return (
    <View style={styles.headerContainer}>
      <Text
        style={{
          fontFamily: "WixMadeforText-Bold",
          fontSize: 16,
          fontWeight: "700",
          color: "#20303C",
          lineHeight: 28,
        }}
      >
        {title}
      </Text>
      <Pressable onPress={onPress}>
        <Text
          style={{
            fontFamily: "WixMadeforText-Bold",
            fontSize: 16,
            fontWeight: "700",
            color: "#116DFF",
            lineHeight: 28,
          }}
        >
          View all
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
