import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addButton(enteredGoal);
    goalInputHandler("");
  };

  const cancelButton = () => {
    props.cancelButton();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} /> 
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    width: "80%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  button: {
    width: "40%"
  },
  buttons: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    width: "60%",
    alignItems: "center"
  }
});
