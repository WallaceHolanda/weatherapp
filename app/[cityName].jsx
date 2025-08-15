import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CityDetails = () => {
    const router = useRouter();
    const searchParams = useGlobalSearchParams();
    const [cityDetails, setCityDetails] = useState(null);

    const handleData = async () => {
        try {
            const response = await fetch('https://climapp-api.vercel.app/api');
            const citiesData = await response.json();
            const city = citiesData.find(
                (c) => c.city == searchParams.cityName
            );
            setCityDetails(city);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        handleData();
    }, []);

    if (!cityDetails) {
        return (
            <LinearGradient
                colors={["#00457D", "#05051F"]}
                style={styles.container}
            />
        );
    }

    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.container}
        >
            <View>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.headerIcon}
                >
                    <MaterialIcons
                        size={24}
                        color={'#fff'}
                        name='chevron-left'
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    {cityDetails != null ? cityDetails.city : 'Cidade não encontrada'}
                </Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderTitle}>Hoje</Text>
                    <Text style={styles.cardHeaderTitle}>{cityDetails.date}</Text>
                </View>

                <View style={styles.cardBox}>
                    <Image
                        style={styles.cardImage}
                        source={require('../assets/images/clouds.png')}
                    />
                    <View>
                        <Text style={styles.cardTemperature}>{cityDetails.temp}°</Text>
                        <Text style={styles.cardDescription}>{cityDetails.description}</Text>
                    </View>
                </View>

                <View style={styles.rowBox}>
                    <View style={styles.row}>
                        <Image source={require('../assets/icons/humidity.png')} />
                        <Text style={styles.rowTitle}>Humidade</Text>
                        <Text style={styles.rowValue}>{cityDetails.humidity}%</Text>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../assets/icons/temperature.png')} />
                        <Text style={styles.rowTitle}>Min/Max:</Text>
                        <Text style={styles.rowValue}>
                            {cityDetails.forecast[0].min}/{cityDetails.forecast[0].max}
                        </Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 40,
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    headerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIcon: {
        left: 0,
        zIndex: 10,
        position: 'absolute',
    },
    headerTitle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Montserrat_600SemiBold',
    },
    card: {
        gap: 40,
        padding: 16,
        width: '100%',
        borderRadius: 24,
        backgroundColor: '#4463D5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardHeader: {
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardHeaderTitle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Montserrat_600SemiBold',
    },
    cardBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: 72,
        height: 64,
    },
    cardTemperature: {
        color: '#fff',
        fontSize: 43,
        textAlign: 'center',
        fontFamily: 'Montserrat_700Bold',
    },
    cardDescription: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular',
    },
    rowBox: {
        gap: 8,
    },
    row: {
        width: '100%',
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowTitle: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
    },
    rowValue: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 'auto',
    }
});

export default CityDetails;