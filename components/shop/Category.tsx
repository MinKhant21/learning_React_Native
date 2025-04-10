import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";

interface Props {
  id: string;
  name: string;
  image: any;
  select: string;
  selectActionHandler: (id: string) => void;
}

const Category = ({ id, name, image, select, selectActionHandler }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => selectActionHandler(id)}>
        <Image
          source={image}
          style={[styles.image, select == id && styles.imageActive]}
          contentFit="cover"
          transition={1000}
        />
      </Pressable>

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
  imageActive: {
    borderColor: "gold",
    borderWidth: 2,
    borderRadius: 40,
  },
});

export default Category;
