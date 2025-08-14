import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["#00457D", "#05051F"]}
      style={styles.container}
    >
      <Text>Weather App</Text>
      <Image source={require("../assets/images/climate.png")} />
      <Text>Seja Bem-Vindo!</Text>
      <TouchableOpacity>
        <Text>Entrar</Text>
      </TouchableOpacity>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
