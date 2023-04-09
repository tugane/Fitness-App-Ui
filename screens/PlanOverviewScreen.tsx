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
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import IconButton from "../components/IconButton";
import FontSize from "../constants/FontSize";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import Font from "../constants/Font";
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
      <ScrollView style={{ paddingHorizontal: Spacing.padding.base }}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: Spacing.padding.sm,
            alignItems: "center",
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
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.base,
              textAlign: "center",
            }}
          >
            PlanOverviewScreen
          </Text>
        </View>
        <ImageBackground
          source={workout.image}
          style={{
            height: 250,
            width: "100%",
            marginVertical: Spacing.margin.lg,
            borderRadius: Spacing.borderRadius.base,
            overflow: "hidden",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              padding: Spacing.padding.sm,
            }}
          >
            <IconButton
              name='bookmark-outline'
              style={{
                backgroundColor: Colors.background,
                borderWidth: 0,
                borderRadius: Spacing.borderRadius.xl,
              }}
            />
          </View>
          <View
            style={{
              margin: Spacing.margin.base,
              borderRadius: Spacing.borderRadius.base,
              overflow: "hidden",
            }}
          >
            <BlurView
              intensity={Platform.OS === "android" ? 100 : 70}
              tint='dark'
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
                <Text
                  style={{
                    fontSize: FontSize.lg,
                    fontWeight: "700",
                    color: Colors.accent,
                    marginRight: Spacing.margin.sm,
                  }}
                >
                  {workout.minutes}
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontSize: FontSize.sm,
                  }}
                >
                  minutes
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: FontSize.lg,
                    fontWeight: "700",
                    color: Colors.accent,
                    marginRight: Spacing.margin.sm,
                  }}
                >
                  {workout.calories}
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontSize: FontSize.sm,
                  }}
                >
                  Calories
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: FontSize.lg,
                    fontWeight: "700",
                    color: Colors.accent,
                    marginRight: Spacing.margin.sm,
                  }}
                >
                  {workout.exercises.length}
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontSize: FontSize.sm,
                  }}
                >
                  Exercises
                </Text>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.lg,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            {workout.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: Spacing.padding.base,
            }}
          >
            <Ionicons name='star' color={Colors.yellow} size={20} />
            <Text
              style={{
                color: Colors.text,
                marginLeft: Spacing.margin.base,
                fontFamily: Font["poppins-regular"],
                fontSize: FontSize.base,
              }}
            >
              {workout.rating}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: Colors.text,
            fontSize: FontSize.sm,
            fontFamily: Font["poppins-regular"],
            marginVertical: Spacing.margin.sm,
          }}
        >
          {workout.coach}
        </Text>
        <View
          style={{
            marginVertical: Spacing.margin.base,
          }}
        >
          <Text
            style={{
              color: Colors.text,
              fontSize: FontSize.base,
              fontFamily: Font["poppins-semiBold"],
              marginVertical: Spacing.margin.sm,
            }}
          >
            Description
          </Text>
          <Text
            numberOfLines={3}
            style={{
              color: Colors.text,
              fontSize: FontSize.sm,
              fontFamily: Font["poppins-regular"],
              marginVertical: Spacing.margin.sm,
            }}
          >
            {workout.description}
          </Text>
        </View>
        <Text
          style={{
            color: Colors.text,
            fontSize: FontSize.base,
            fontFamily: Font["poppins-semiBold"],
            marginVertical: Spacing.margin.sm,
          }}
        >
          Exercises ({workout.exercises.length})
        </Text>
        <View
          style={{
            marginVertical: Spacing.margin.base,
          }}
        >
          {workout.exercises.map((exercise) => (
            <TouchableOpacity
              key={exercise.id}
              style={{
                borderRadius: Spacing.borderRadius.base,
                overflow: "hidden",
                backgroundColor: Colors.primary,
                marginRight: Spacing.margin.lg,
                flexDirection: "row",
                padding: Spacing.padding.sm,
                marginBottom: Spacing.margin.lg,
                width: "100%",
              }}
            >
              <Image
                source={exercise.image}
                style={{
                  width: 100,
                  height: 80,
                  borderRadius: Spacing.borderRadius.base,
                }}
              />
              <View
                style={{
                  paddingHorizontal: Spacing.padding.base,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: Colors.text,
                    fontSize: FontSize.base,
                    fontWeight: "700",
                  }}
                >
                  {exercise.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: Spacing.margin.sm,
                  }}
                >
                  <Ionicons name='time-outline' color={Colors.text} size={15} />
                  <Text
                    style={{
                      color: Colors.text,
                      fontSize: FontSize.sm,
                      marginLeft: Spacing.margin.base,
                    }}
                  >
                    {exercise.time} sec/ {exercise.set} set
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name='play' color={Colors.accent} size={15} />
                  <Text
                    style={{
                      color: Colors.text,
                      fontSize: FontSize.sm,
                      marginLeft: Spacing.margin.sm,
                    }}
                  >
                    Play
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <LinearGradient
        style={{
          position: "absolute",
          width: "100%",
          paddingBottom: Spacing.padding.xl,
          paddingHorizontal: Spacing.padding.base,
          bottom: 0,
        }}
        colors={[`rgba(0,0,0,0)`, "#000"]}
      >
        <Button
          text='Start Workout'
          style={{
            backgroundColor: Colors.accent,
          }}
        />
      </LinearGradient>
    </Screen>
  );
};

export default PlanOverviewScreen;

const styles = StyleSheet.create({});
