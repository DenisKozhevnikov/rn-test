import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from "./src/Navbar"
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter((todo) => todo.id !== id))
  }

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={( item ) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo}/>
          )}
        />

        {/* <View >
          {
            todos.map((todo) => <Todo todo={todo} key={todo.id} />)
          }
        </View> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
  // container: {
    // flex: 1,
    // height: '10%',
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  // },
  // text: {
  //   color:'#fff',
  //   fontSize: 30,
  // }
});


// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// export const AddTodo = (props) => {
//   return (
//     <View></View>
//   )
// }

// const styles = StyleSheet.create({

// })