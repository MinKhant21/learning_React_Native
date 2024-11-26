import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {Link} from "expo-router";

const Index = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>
                Index Page
            </Text>
            <Link href={'/about'} >go to about</Link>
        </SafeAreaView>
    )
}

export default Index