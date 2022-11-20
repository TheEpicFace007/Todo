import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { useState } from 'react';
import { uuid } from './utils';
import TodoListItem from './components/TodoListItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Faire le ménage', key: uuid(), done: false },
    { text: 'Faire les courses', key: uuid(), done: false },
    { text: 'Faire la vaisselle', key: uuid(), done: true },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo addTodo={(todoTxt) => {
        setTodos((prevTodos) => {
          return [
            { text: todoTxt, key: uuid(), done: false },
            ...prevTodos
          ]
        })
      }} />
      <FlatList data={todos} renderItem={(info) => {
        return (
          <TodoListItem item={info.item} toggleTodo={(key) => {
            setTodos((prevTodos) => {
              return prevTodos.map(todo => {
                if (todo.key == key) {
                  todo.done = !todo.done;
                }
                return todo;
              })
            })
          }} deleteTodo={key => {
            setTodos((prevTodos) => {
              return prevTodos.filter(todo => todo.key != key)
            })
          }} />
        )
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
