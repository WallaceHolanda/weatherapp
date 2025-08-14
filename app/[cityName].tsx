import { useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const CityDetails = () => {
    const searchParams = useGlobalSearchParams();

    return (
        <View>
            <Text>
                {searchParams.cityName}
            </Text>

        </View>
    );
}

export default CityDetails;