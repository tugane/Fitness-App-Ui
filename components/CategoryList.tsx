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
import { Category } from "../data";
import Colors from "../constants/Colors";

type Props = {
  categories: Category[];
};

const CategoryList: React.FC<Props> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[{ id: 0, name: "All" }, ...categories].map((category, index) => (
        <TouchableOpacity
          onPress={() => setActiveCategory(index)}
          style={{
            paddingHorizontal: Spacing.padding.base,
            paddingVertical: Spacing.padding.sm,
            backgroundColor:
              activeCategory === index ? Colors.accent : Colors.primary,
            borderRadius: Spacing.borderRadius.base,
            marginRight: Spacing.margin.base,
          }}
          key={category.id}
        >
          <Text
            style={{
              color: activeCategory === index ? Colors.onAccent : Colors.text,
              fontSize: FontSize.base,
            }}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
