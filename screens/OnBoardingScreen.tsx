import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

const OnBoardingScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const { height } = Dimensions.get("window");
  const { colors } = useTheme();
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require("../assets/images/onboarding.jpeg")}
    >
      <LinearGradient
        colors={[`rgba(0, 0, 0, 0.123)`, "black"]}
        style={{ height, width: "100%" }}
        start={{ x: 0, y: 0.1 }}
      >
        <Text style={{ color: colors.text }}>
          Stay health even if you stay at home
        </Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
