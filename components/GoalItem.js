import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        props.onDelete(props.id);
      }}
    >
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#00E74D",
    backgroundColor: "#00E74D"
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});
