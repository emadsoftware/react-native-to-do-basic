import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons
import styles from './styles';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleCompleted(task.id)}>
        <Icon
          name={task.completed ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color={task.completed ? '#4caf50' : '#757575'} // Green if checked
        />
      </TouchableOpacity>
      <Text
        style={[styles.todoItemText, task.completed && styles.completed]}
      >
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
