import { Pressable, StyleSheet, Text, View } from "react-native";

function ItemTarefa(props) {
    return (
        <Pressable onPress={props.aoApagar.bind(null, props.id)}>
            <View style={styles.goalItem}>
                <Text
                    style={styles.goalText}>
                    {props.texto}
                </Text>
            </View>
        </Pressable>
    );
};
export default ItemTarefa;
const styles = StyleSheet.create(
    {
        goalItem: {
            margin: 8,
            padding: 8,
            borderRadius: 6,
            backgroundColor: '#487d76'
        },
        goalText: {
            fontSize: 20,
            color: 'white'
        }
    },
);
