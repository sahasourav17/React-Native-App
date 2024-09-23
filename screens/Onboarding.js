import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import "../utils/i18n";

import OnboardingImage1 from "../assets/Onboarding/Illustration.svg";
import OnboardingImage2 from "../assets/Onboarding/Illustration-1.svg";
import OnboardingImage3 from "../assets/Onboarding/Illustration-2.svg";
import { useTranslation } from "react-i18next";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "bn" : "en");
  };

  const swiperRef = useRef(null);

  const pages = [
    {
      title: t("onboard1stScreen"),
      description:
        "I provide essential stuff for your ui designs every tuesday!",
      Image: OnboardingImage1,
    },
    {
      title: t("onboard2ndScreen"),
      description: "Make sure to take a look my upload profile every tuesday.",
      Image: OnboardingImage2,
    },
    {
      title: t("onboard3rdScreen"),
      description:
        "You can follow me if you wanted comment on any to get some freebies",
      Image: OnboardingImage3,
    },
  ];

  const handleSignIn = () => {
    if (swiperRef.current && swiperRef.current.state.index < pages.length - 1) {
      swiperRef.current.scrollBy(1);
    } else {
      navigation.navigate("Home");
    }
  };

  const handleSignup = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsPagination={true}
        loop={false}
        autoplay={true}
        autoplayTimeout={3}
        removeClippedSubviews={false}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationDotActive}
      >
        {pages.map((page, index) => (
          <View key={index} style={styles.slide}>
            <page.Image width={width * 0.8} height={height * 0.4} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{page.title}</Text>
              <Text style={styles.description}>{page.description}</Text>
            </View>
          </View>
        ))}
      </Swiper>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.signUpBtn}>
          <Text style={styles.btnText}>{t("signup")}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignIn} style={styles.existingUserBtn}>
          <Text style={styles.btnText}>{t("existingUser")}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
        <Text style={styles.languageButtonText}>
          {isEnglish ? "বাংলা" : "English"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {},
  languageButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  languageButtonText: {
    color: "#e3007b",
    fontSize: 16,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 40,
    color: "#666",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
    marginBottom: 100,
  },
  paginationDotActive: {
    backgroundColor: "#000",
    marginBottom: 100,
  },
  buttonContainer: {
    flexDirection: "Column",
    // justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpBtn: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    marginBottom: 10,
  },
  existingUserBtn: {
    // backgroundColor: "#007bff",
    padding: 15,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    width: "90%",
    marginBottom: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OnboardingScreen;
