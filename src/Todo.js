import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove }) => {

  return (
    <TouchableOpacity
      activeOpacity={.7}
      onPress={() => console.log('Pressed', todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  }
})