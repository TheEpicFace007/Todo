import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { useState } from 'react';
import { uuid } from './utils';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Faire le ménage', key: uuid() },
    { text: 'Faire les courses', key: uuid() },
    { text: 'Faire la vaisselle', key: uuid() },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo addTodo={(todoTxt) => {
        setTodos((prevTodos) => {
          return [
            { text: todoTxt, key: uuid() },
            ...prevTodos
          ]
        })
      }} />
      <FlatList data={todos} renderItem={(info) => {
        return (
          <Text>{info.item.text}</Text>
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
