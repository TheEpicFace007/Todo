import { View, StyleSheet, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TodoListItem(props: { item: { text: string, key: string, done: boolean },
    toggleTodo: (key: string) => void, deleteTodo: (key: string) => void}) {
    const [done, setDone] = useState(props.item.done);
    const onCheck = () => {
        setDone(!done);
        props.toggleTodo(props.item.key);
    }
    const [deleteStage, setDeleteStage] = useState(0);
    const onDelete = () => {
        if (deleteStage == 0) {
            setDeleteStage(1);
            setTimeout(() => {
                setDeleteStage(0);
            }, 2000);
        } else {
            props.deleteTodo(props.item.key);
        }
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.text, {
                textDecorationLine: props.item.done ? "line-through" : "none"
            }]}>  {props.item.text}  </Text>
            <TouchableOpacity style={styles.buttons} onPress={onCheck}>
                <Text><Icon name="check" size={21} /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons]} onPress={onDelete}>
                <Text><Icon name="trash" size={21} color={deleteStage == 1 ? "#fe3000" : "#000"} /></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        direction: "rtl",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        flexBasis: '75%',
        paddingHorizontal: 10,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
    }
});