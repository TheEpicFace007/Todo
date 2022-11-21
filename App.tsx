import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { uuid } from './utils';
import TodoListItem from './components/TodoListItem';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';


export default function App() {
  const [todos, setTodos] = useState([]);
  const { getItem: getTodoItem, setItem: setTodoItem, mergeItem } = useAsyncStorage('todos')  
  
  const getodos = async () => {
    const todos = await getTodoItem();
    if (todos) {
      setTodos(JSON.parse(todos));
    } else {
      setTodoItem(JSON.stringify([]));
    }
  }
  useEffect(() => {
    getodos();
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <AddTodo addTodo={(todoTxt) => {
        setTodos((prevTodos) => {
          const newTodo = [
            { text: todoTxt, key: uuid(), done: false },
            ...prevTodos
          ]
          setTodoItem(JSON.stringify(newTodo));
          return newTodo;
        })
      }} />
      <FlatList data={todos} renderItem={(info) => {
        return (
          <TodoListItem item={info.item} toggleTodo={(key) => {
            setTodos((prevTodos) => {
              let todos = prevTodos.map(todo => {
                if (todo.key == key) {
                  todo.done = !todo.done;
                }
                return todo;
              });
              setTodoItem(JSON.stringify(todos));
              return todos;
            })
          }} deleteTodo={key => {
            setTodos((prevTodos) => {
              const todos = prevTodos.filter(todo => todo.key != key)
              setTodoItem(JSON.stringify(todos));
              return todos;
            })
          }} />
        )
      }} />
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
