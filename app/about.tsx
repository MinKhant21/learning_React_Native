import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";

const About = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Link href={'/(tabs)'}>
                Go to Tab
            </Link>
        </SafeAreaView>
    )
}

export default About;