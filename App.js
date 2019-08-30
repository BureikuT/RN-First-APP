import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
    console.log(enteredGoal + " " + "was added");
    goalInputHandler("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text style={styles.titleBold}>To Do List</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>

      <View>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    width: "80%",
    borderWidth: 1,
    padding: 10
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15
  },
  titleBold: {
    fontWeight: "bold",
    fontSize: 50
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
