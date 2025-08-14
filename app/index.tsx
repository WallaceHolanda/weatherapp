import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#00457D", "#05051F"]}
      style={styles.container}
    >
      <Text style={styles.appTitle}>WeatherApp</Text>
      <Image source={require("../assets/images/climate.png")} />
      <Text style={styles.text}>Seja Bem-Vindo!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/cities')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
        <MaterialIcon
          size={24}
          color={'#01080E'}
          name='arrow-forward'
        />
      </TouchableOpacity>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 32,
  },
  appTitle: {
    fontSize: 26,
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold'
  },
  text: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    gap: 8,
    height: 40,
    width: '100%',
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7693FF',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#01080E',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
