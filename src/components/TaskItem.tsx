// src/components/TaskItem.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../theme";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={onToggle} style={styles.checkBox}>
        <Text style={styles.checkIcon}>{task.completed ? "✓" : "○"}</Text>
      </TouchableOpacity>

      <Text style={[styles.taskText, task.completed && styles.completed]}>
        {task.title}
      </Text>

      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.m,
    marginVertical: theme.spacing.s,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.radii.m,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  checkBox: {
    marginRight: theme.spacing.m,
  },
  checkIcon: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  taskText: {
    flex: 1,
    color: theme.colors.text,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
    color: theme.colors.completedText,
  },
  deleteButton: {
    marginLeft: theme.spacing.m,
    padding: theme.spacing.s,
  },
  deleteText: {
    color: theme.colors.danger,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaskItem;