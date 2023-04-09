import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Spacing from "../constants/Spacing";
import { categories, user, workoutPlans, workouts } from "../data";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import { TouchableOpacity } from "react-native";
import Rating from "react-native-easy-rating";
import { Ionicons } from "@expo/vector-icons";
import CategoryList from "../components/CategoryList";
import Screen from "../components/Screen";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={user.profile}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: Spacing.borderRadius.xxl,
                }}
              />
              <View
                style={{
                  paddingHorizontal: Spacing.padding.sm,
                }}
              >
                <Text
                  style={{
                    color: Colors.text,
                    fontSize: FontSize.base,
                    marginBottom: Spacing.margin.sm,
                  }}
                >
                  Hello, Welcome
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: "bold",
                    fontSize: FontSize.lg,
                  }}
                >
                  Fernando Desilva
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: Colors.border,
              borderRadius: Spacing.borderRadius.sm,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name='notifications-outline'
              color={Colors.text}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: Spacing.margin.xl,
            flexDirection: "row",
            backgroundColor: Colors.primary,
            paddingVertical: Spacing.padding.sm,
            paddingHorizontal: Spacing.padding.sm,
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: Spacing.borderRadius.base,
          }}
        >
          <Ionicons name='search-outline' color={Colors.text} size={25} />
          <TextInput
            placeholderTextColor={Colors.text}
            placeholder='Search Workouts..'
            style={{
              padding: Spacing.padding.xs,
              fontSize: FontSize.base,
              width: "85%",
              color: Colors.text,
            }}
          />
          <TouchableOpacity
            style={{
              padding: Spacing.padding.xs,
              backgroundColor: Colors.accent,
              borderRadius: Spacing.borderRadius.sm,
            }}
          >
            <Ionicons
              name='options-outline'
              color={Colors.onAccent}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <CategoryList categories={categories} />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: Spacing.padding.lg,
            }}
          >
            <Text
              style={{
                color: Colors.text,
                fontSize: FontSize.lg,
                fontWeight: "600",
              }}
            >
              Featured Workouts
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: Colors.accent,
                  fontSize: FontSize.base,
                }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            snapToInterval={300 + Spacing.margin.lg}
            decelerationRate='fast'
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {workouts.map((workout) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PlanOverview", { workout: workout })
                }
                key={workout.id}
                style={{
                  width: 300,
                  borderRadius: Spacing.borderRadius.base,
                  overflow: "hidden",
                  backgroundColor: Colors.primary,
                  marginRight: Spacing.margin.lg,
                }}
              >
                <Image
                  source={workout.image}
                  style={{
                    width: "100%",
                    height: 200,
                  }}
                />
                <View
                  style={{
                    padding: Spacing.padding.base,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: Spacing.margin.sm,
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.text,
                        fontSize: FontSize.base,
                        fontWeight: "700",
                      }}
                    >
                      {workout.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons name='star' size={20} color={Colors.yellow} />
                      <Text
                        style={{
                          color: Colors.text,
                          fontSize: FontSize.base,
                          marginLeft: Spacing.margin.sm,
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
                    }}
                  >
                    {workout.coach}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: Spacing.padding.lg,
            }}
          >
            <Text
              style={{
                color: Colors.text,
                fontSize: FontSize.lg,
                fontWeight: "600",
              }}
            >
              Trending Plans
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: Colors.accent,
                  fontSize: FontSize.base,
                }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {workoutPlans.map((workout) => (
              <TouchableOpacity
                key={workout.id}
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
                  source={workout.image}
                  style={{
                    width: 100,
                    height: 80,
                    borderRadius: Spacing.borderRadius.lg,
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
                    {workout.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: Spacing.margin.sm,
                    }}
                  >
                    <Ionicons
                      name='calendar-outline'
                      color={Colors.text}
                      size={15}
                    />
                    <Text
                      style={{
                        color: Colors.text,
                        fontSize: FontSize.sm,
                        marginLeft: Spacing.margin.base,
                      }}
                    >
                      {workout.duration} | {workout.location}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      rating={workout.rating}
                      max={5}
                      iconWidth={24}
                      iconHeight={24}
                    />
                    <Text
                      style={{
                        color: Colors.text,
                        fontSize: FontSize.lg,
                      }}
                    >
                      {workout.rating}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
