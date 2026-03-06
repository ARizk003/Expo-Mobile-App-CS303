import {Text, View, StyleSheet, TextInput, ActivityIndicator, Button} from "react-native";
import {Image} from "expo-image";
import {Link, useRouter} from "expo-router";


export default function Index() {


    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.helloWorldTitle}>hi family </Text>
            <Image source={{uri: "https://media.tenor.com/HHZOPnpoWPMAAAAe/why-you-lying.png"}}
                   style={styles.image}
            />
            <TextInput placeholder="Email"/>
            <ActivityIndicator size={"large"}/>
            {/*<Link href={"(tabs)/about"}>Go to About Screen</Link>*/}
            {/*<Button title="Navigate" onPress={() => router.push("(tabs)/about")}/>*/}
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
