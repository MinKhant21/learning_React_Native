import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  name: string;
};

const Title = ({ title, name }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btn: {
    fontSize: 10,
  },
});

export default Title;
