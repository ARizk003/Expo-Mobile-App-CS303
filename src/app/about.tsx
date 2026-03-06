import {Text, View, StyleSheet, TextInput, ActivityIndicator} from "react-native";
import {Image} from "expo-image";
import {Link} from "expo-router";


export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://c.tenor.com/QA_IqSKoWTcAAAAC/tenor.gif"}}
                   style={styles.image}
            />
            <Link href={"/"}>Go to About Screen</Link>

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
