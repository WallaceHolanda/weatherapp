import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import citiesData from "../data/cities.json";

export default Cities = () => {
    const router = useRouter();
    const [cities, setCities] = useState(citiesData);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (!search) {
            setCities(citiesData);
        } else {
            const citiesSearched = citiesData.filter((c) => c.city.toLowerCase().includes(search.toLowerCase()));
            setCities(citiesSearched);
        }

    }, [search]);

    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a cidade"
                    placeholderTextColor={'#fff'}
                    value={search}
                    onChangeText={(value) => setSearch(value)}
                />
                <MaterialIcons name="search" size={18} color={"#fff"} />
            </View>
            <ScrollView>
                <View style={styles.scrollList}>
                    {
                        cities.map(city => (
                            <TouchableOpacity
                                key={city.city}
                                style={styles.listItem}
                                onPress={() => router.push(`/${city.city}`)}
                            >
                                <Image
                                    style={styles.cityImage}
                                    source={require('../assets/images/clouds.png')}
                                />
                                <Text style={styles.cityName}>{city.city.replace(', ', ' - ')}</Text>
                                <Text style={styles.cityTemp}>{city.temp}°</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
        gap: 40,
    },
    scrollList: {
        gap: 16,
    },
    inputContainer: {
        height: 46,
        width: "100%",
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    input: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
    },
    listItem: {
        height: 64,
        width: '100%',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    cityImage: {
        height: 24,
        width: 24,
    },
    cityName: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Montserrat_500Medium',
    },
    cityTemp: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Montserrat_700Bold',
    }
});