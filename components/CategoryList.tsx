import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { categories } from "../data";
import AppText from "./AppText";
import Colors from "../constants/Colors";

const CategoryList: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[{ id: 0, name: "All" }, ...categories].map((category) => (
        <TouchableOpacity
          onPress={() => setActive(category.id)}
          style={{
            paddingHorizontal: Spacing.padding.base,
            paddingVertical: Spacing.padding.sm,
            backgroundColor:
              active === category.id ? Colors.accent : Colors.primary,
            marginRight: Spacing.margin.base,
            borderRadius: Spacing.borderRadius.base,
          }}
          key={category.id}
        >
          <AppText
            style={{
              color: active === category.id ? Colors.onAccent : Colors.text,
              fontSize: FontSize.sm,
            }}
          >
            {category.name}
          </AppText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
