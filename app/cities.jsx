import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import citiesData from "../data/cities.json";

export default Cities = () => {

    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.container}
        >
            <ScrollView>
                <View style={styles.scrollList}>
                    {
                        citiesData.map(city => (
                            <View key={city.city} style={styles.listItem}>
                                <Image
                                    style={styles.cityImage}
                                    source={require('../assets/images/clouds.png')}
                                />
                                <Text style={styles.cityName}>{city.city.replace(', ', ' - ')}</Text>
                                <Text style={styles.cityTemp}>{city.temp}°</Text>
                            </View>
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
        paddingHorizontal: 16,
    },
    scrollList: {
        gap: 16,
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