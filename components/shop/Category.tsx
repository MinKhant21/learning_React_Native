import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";

interface Props {
  id: string;
  name: string;
  image: any;
}

const Category = ({ id, name, image }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.caption}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    marginRight: 10,
  },
  caption: {
    marginRight: 10,
    marginLeft: 5,
    paddingTop: 2,
  },
  image: {
    width: 55,
    height: 55,
  },
});

export default Category;
