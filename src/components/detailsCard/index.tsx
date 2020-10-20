import {
  StyleProp,
  ViewStyle,
  View,
  ScrollView
} from "react-native";
import styles from "./styles";
import React from "react";

interface DetailsCardProps {
  children: Element;
  containerStyle?: StyleProp<ViewStyle>;
  scrollContainer?: StyleProp<ViewStyle>;
}

export default function DetailsCard({
  children,
  containerStyle,
  scrollContainer,
}: DetailsCardProps) {
  return (
      <View style={[styles.container, containerStyle]}>
        <ScrollView contentContainerStyle={scrollContainer}>
         {children}
        </ScrollView>
      </View>
  );
}
