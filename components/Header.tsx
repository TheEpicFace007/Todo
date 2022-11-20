import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <Text style={styles.title}>To Do</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: "forestgreen",
        textAlign: "center",
        color: "white",
        width: "100%",
        fontSize: 25,
        padding: 15
    }
});