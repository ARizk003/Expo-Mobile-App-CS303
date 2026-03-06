import {Text, View, StyleSheet, TextInput, ActivityIndicator} from "react-native";
import {Image} from "expo-image";
import {Link} from "expo-router";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>hi rizk family </Text>
      <Image source={{uri: "https://media.tenor.com/HHZOPnpoWPMAAAAe/why-you-lying.png"}}
        style={styles.image}
      />
      <TextInput placeholder="Email"/>
      <ActivityIndicator size={"large"} />
      <Link href={"/about"}>Go to About Screen</Link>
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
    color: "red" ,
  },
  image: {
    width: 200 ,
    height: 200 ,
  }
});
