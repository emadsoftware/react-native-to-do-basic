import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row', // Flexbox layout for horizontal alignment
    justifyContent: 'space-between', // Space between elements
    alignItems: 'center', // Align items vertically in the center
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  todoItemText: {
    flex: 1, // Allow the text to take up remaining space
    marginRight: 8,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff6347', // Tomato color
    paddingVertical: 4, // Vertical padding
    paddingHorizontal: 8, // Horizontal padding
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  todoItemText: {
    fontSize: 16, // Set a visible font size
    color: '#000', // Ensure text color is not blending into the background
  },
});

export default styles;
