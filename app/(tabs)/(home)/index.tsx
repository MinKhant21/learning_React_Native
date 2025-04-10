import {
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import { categories } from "@/data";
import { FlashList } from "@shopify/flash-list";
import Category from "@/components/shop/Category";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [select, setSelect] = useState("uuid1");
  const selectActionHandler = (id: string) => {
    setSelect(id);
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable>
            <Image
              source={require("@/assets/images/n.png")}
              style={styles.logo}
              // placeholder = {{blurhash}}
              contentFit="cover"
              transition={1000}
            />
          </Pressable>
          <Pressable>
            <Cart />
          </Pressable>
        </View>
        <ScrollView>
          <View style={styles.bannerWrapper}>
            <Image
              source={require("@/assets/images/banner6.png")}
              style={styles.bannerImage}
              // placeholder = {{blurhash}}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <Title title={"Shop By Category"} name={"See All"} />
          <View style={styles.categories}>
            <FlashList
              data={categories}
              extraData={select}
              renderItem={({ item }) => (
                <Category
                  {...item}
                  select={select}
                  selectActionHandler={selectActionHandler}
                />
              )}
              estimatedItemSize={80}
              horizontal
              // Remove ScrollIndicator
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Title title={"Recommended For You"} name={"See All"} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  categories: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 25,
  },
  bannerWrapper: {
    width: "100%",
  },
  bannerImage: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
