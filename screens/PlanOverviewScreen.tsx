import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppText from "../components/AppText";
import IconButton from "../components/IconButton";
import Spacing from "../constants/Spacing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { BlurView } from "expo-blur";
import Font from "../constants/Font";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import Screen from "../components/Screen";

type Props = NativeStackScreenProps<RootStackParamList, "PlanOverview">;

const PlanOverviewScreen: React.FC<Props> = ({
  route,
  navigation: { goBack },
}) => {
  const workout = route.params.workout;
  return (
    <Screen>
      <ScrollView
        style={{
          paddingHorizontal: Spacing.padding.base,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: Spacing.padding.base,
            justifyContent: "center",
          }}
        >
          <IconButton
            onPress={() => goBack()}
            style={{
              position: "absolute",
              left: 0,
            }}
            name='chevron-back'
          />
          <AppText>Plan Overview</AppText>
        </View>
        <ImageBackground
          source={workout.image}
          style={{
            height: 250,
            marginVertical: Spacing.margin.lg,
            borderRadius: Spacing.borderRadius.base,
            overflow: "hidden",
            justifyContent: "space-between",
            paddingVertical: Spacing.padding.base,
          }}
        >
          <View
            style={{
              paddingHorizontal: Spacing.padding.base,
              alignItems: "flex-end",
            }}
          >
            <IconButton
              name='bookmark-outline'
              style={{
                backgroundColor: Colors.primary,
                borderWidth: 0,
              }}
            />
          </View>
          <View
            style={{
              borderRadius: Spacing.borderRadius.base,
              overflow: "hidden",
              marginHorizontal: Spacing.margin.lg,
            }}
          >
            <BlurView
              tint='dark'
              intensity={Platform.OS === "android" ? 100 : 80}
              style={{
                padding: Spacing.padding.base,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{
                    fontFamily: Font["poppins-semiBold"],
                    color: Colors.accent,
                    marginRight: Spacing.margin.base,
                  }}
                >
                  {workout.minutes}
                </AppText>
                <AppText
                  style={{
                    fontSize: FontSize.sm,
                  }}
                >
                  minutes
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{
                    fontFamily: Font["poppins-semiBold"],
                    color: Colors.accent,
                    marginRight: Spacing.margin.base,
                  }}
                >
                  {workout.calories}
                </AppText>
                <AppText
                  style={{
                    fontSize: FontSize.sm,
                  }}
                >
                  calories
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText
                  style={{
                    fontFamily: Font["poppins-semiBold"],
                    color: Colors.accent,
                    marginRight: Spacing.margin.base,
                  }}
                >
                  {workout.exercises.length}
                </AppText>
                <AppText
                  style={{
                    fontSize: FontSize.sm,
                  }}
                >
                  exercises
                </AppText>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AppText
            style={{
              fontSize: FontSize.lg,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            {workout.name}
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name='star' size={20} color={Colors.yellow} />
            <AppText
              style={{
                marginLeft: Spacing.margin.sm,
              }}
            >
              {workout.rating}
            </AppText>
          </View>
        </View>
        <AppText
          style={{
            marginTop: Spacing.margin.sm,
          }}
        >
          {workout.coach}
        </AppText>
        <AppText
          style={{
            marginTop: Spacing.margin.base,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          Description
        </AppText>
        <AppText
          numberOfLines={3}
          style={{
            marginTop: Spacing.margin.sm,
            fontFamily: Font["poppins-regular"],
          }}
        >
          {workout.description}
        </AppText>
        <AppText
          style={{
            marginVertical: Spacing.margin.base,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          Exercises ({workout.exercises.length})
        </AppText>

        {workout.exercises.map((exercise) => (
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              borderRadius: Spacing.borderRadius.base,
              marginBottom: Spacing.margin.lg,
              padding: Spacing.padding.base,
              flexDirection: "row",
            }}
            key={exercise.id}
          >
            <Image
              source={exercise.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: Spacing.borderRadius.base,
              }}
            />
            <View
              style={{
                marginLeft: Spacing.margin.base,
                justifyContent: "space-between",
              }}
            >
              <AppText
                style={{
                  fontFamily: Font["poppins-semiBold"],
                }}
              >
                {exercise.name}
              </AppText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name='time-outline' size={16} color={Colors.text} />
                <AppText
                  style={{
                    fontFamily: Font["poppins-regular"],
                    marginLeft: Spacing.margin.sm,
                  }}
                >
                  {exercise.time} / {exercise.set} set
                </AppText>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name='play' size={16} color={Colors.accent} />
                <AppText
                  style={{
                    fontFamily: Font["poppins-regular"],
                    marginLeft: Spacing.margin.sm,
                  }}
                >
                  Play
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <LinearGradient
        style={{
          position: "absolute",
          width: "100%",
          paddingBottom: Spacing.padding.xxl,
          paddingTop: Spacing.padding.sm,
          bottom: 0,
          paddingHorizontal: Spacing.padding.base,
        }}
        colors={[`rgba(0,0,0,0)`, "black"]}
      >
        <Button>Start Workout</Button>
      </LinearGradient>
    </Screen>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
