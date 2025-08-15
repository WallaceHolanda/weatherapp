import { LinearGradient } from "expo-linear-gradient";
import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CityDetails = () => {
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

    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.container}
        >
            <View>
                <Text style={styles.headerTitle}>
                    {cityDetails != null ? cityDetails.city : 'Cidade não encontrada'}
                </Text>
            </View>

        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    headerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Montserrat_500Medium',
    }
});

export default CityDetails;