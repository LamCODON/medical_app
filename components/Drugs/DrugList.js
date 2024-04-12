import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductImg from "../../assets/product.png";
import Layout from "../common/Layout/Layout";
import STYLES from "../../constant/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";

const DrugList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const renderProducts = () => {
    const products = [];
    for (let index = 1; index < 29; index++) {
      products.push({
        id: index,
        image: ProductImg,
        name: "Product" + index,
        volume: "75ml",
        description: {
          define:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          warning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          avoid:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          interaction:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      });
    }
    return products;
  };

  const data = renderProducts();

  const RenderItem = ({ item }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate("MedicineNavigator", { screen: "Drug Details", props: item })}
    >
      <Image source={item?.image} />
      <Text style={styles.itemText}>{item?.name}</Text>
      <Text style={styles.itemVolume}>{item?.volume}</Text>
    </Pressable>
  );

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
        <Text style={styles.headerText}>{route.name}</Text>
      </View>
      <ScrollView>
        <View style={styles.productList}>
          {data.map((item) => (
            <RenderItem item={item} key={item?.id} />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DrugList;

const styles = StyleSheet.create({
  productList: {
    flex: 1,
    paddingTop: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 16,
    paddingBottom: 40,
  },
  itemContainer: {
    maxWidth: "calc(100% - 16px / 3)",
    padding: 20,
    borderRadius: 12,
    borderColor: "#E8F3F1",
    borderWidth: 2,
  },
  itemText: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: 16,
  },
  itemVolume: {
    color: STYLES.gray,
  },
  viewBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  headerText: {
    color: STYLES.blackText,
    fontSize: 24,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    transform: [{ translateX: -8 }],
  },
});
