import {Text, View, StyleSheet} from "react-native";


export default function Profile() {
    return (
        <View style={styles.container}>
            <Text> Profile screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    helloWorldTitle: {
        color: "red",
    },
    image: {
        width: 200,
        height: 200,
    }
});
