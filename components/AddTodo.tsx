import { StyleSheet, View, TouchableOpacity, Text, 
        TextInput, Alert } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddTodo(props: { addTodo: (text: string) => void }) {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput style={styles.text}  placeholder="Ajouter une tâche" onChangeText={t => setText(t)} 
            value={text}/>
            <TouchableOpacity style={styles.button} onPress={() => {
                if (text.length > 0) {
                    props.addTodo(text);
                    setText("");
                } else {
                    Alert.alert("Erreur", "La tâche ne peut pas être vide");
                }
            }}>
                <Text><Icon name="plus" size={32} /></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        alignSelf: 'center',
        // center the button
        justifyContent: 'center',
        // center the text
        alignItems: 'center',
        padding: 10,
        fontSize: 20,
    },
    text: {
        width: "80%",
        height: 50,
        fontSize: 20
    },
    container: {
        alignContent: "center",
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 10
    }
});