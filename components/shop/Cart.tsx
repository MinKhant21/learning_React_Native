import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="cart-outline" size={24} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>5</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    textContainer:{
        backgroundColor:"red",
        width:15,
        height:15,
        borderRadius:10,
        justifyContent: 'center',
        alignItems:"center",
        marginLeft:-10,
        marginTop:-3
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:12,
    }
})