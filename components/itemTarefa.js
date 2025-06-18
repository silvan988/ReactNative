import { StyleSheet, Text, View } from "react-native";
function ItemTarefa(props) {
    return (
        <View style={styles.goalItem}>
            <Text
                style={styles.goalText}>
                {props.itemtexto}
            </Text>
        </View>
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
