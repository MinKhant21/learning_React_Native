import {Image, StyleSheet, Platform, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView>
       <View style={styles.container}>
           <Text style={styles.title}>Hello</Text>
           <Link href={'/about'}>Go to about</Link>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color:"green"
    },
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})
