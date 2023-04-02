import { ImageBackground, StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Button from "../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

const OnBoardingScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const handlePress = () => {
    navigate("Home");
  };
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require("../assets/images/onboarding.jpeg")}
    >
      <LinearGradient
        colors={[`rgba(0, 0, 0, 0.123)`, "black"]}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          paddingVertical: Spacing.padding.xxl,
          paddingHorizontal: Spacing.padding.lg,
        }}
        start={{ x: 0, y: 0.1 }}
      >
        <Text
          style={{
            color: Colors.text,
            fontSize: FontSize.xxl,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: Spacing.margin.xl,
          }}
        >
          Stay health even if you stay at home
        </Text>
        <Text
          style={{
            color: Colors.text,
            textAlign: "center",
            fontWeight: "500",
            fontSize: FontSize.base,
            marginBottom: Spacing.margin.xl,
          }}
        >
          Staying fit to keep you in good condition can now go through mobile
          apps
        </Text>
        <Button
          style={{
            marginTop: Spacing.margin.xxl * 2,
          }}
          text="Get Started"
          onPress={handlePress}
        />
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
