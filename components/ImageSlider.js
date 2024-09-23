import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ImageSlider({ imageSrc, btnText, onPress }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageSrc}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <Pressable onPress={onPress} style={styles.button}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 6,
            }}
          >
            <Text style={styles.buttonText}>{btnText}</Text>
            <AntDesign name="arrowright" size={20} color="#fff" />
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  buttonText: {
    color: "white",
    fontFamily: "WixMadeforText-Bold",
    fontSize: 16,
    textAlign: "center",
  },
});
