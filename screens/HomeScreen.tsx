import {Dimensions, SafeAreaView, StyleSheet, Text, View,} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";

const {height} = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({navigation: {navigate}}) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{
                    padding: Spacing.padding.sm
                }}>WelcomeScreen</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
