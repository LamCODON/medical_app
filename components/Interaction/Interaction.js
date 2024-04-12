import { FlatList, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../common/Layout/Layout";
import styles from "./InteractionStyles";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import DeleteIcon from "../../assets/icons/delete.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductImg from "../../assets/product.png";
import { Button } from "react-native-elements";

const Interaction = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const renderProducts = () => {
    const products = [];
    for (let index = 1; index < 10; index++) {
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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(renderProducts());
  }, []);

  const handleCheckInteraction = () => {
    navigation.navigate("Interaction Details");
  };

  const handleDeleteItem = (item) => {
    setProducts((products) => products.filter((v) => v.id !== item.id));
  };

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
        <Text style={styles.headerText}>{route.name}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ marginVertical: 16 }}>Search field</Text>
        <Button
          title="Check Interaction"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={handleCheckInteraction}
        />
      </View>
      <FlatList
        data={products}
        contentContainerStyle={styles.productContainer}
        renderItem={({ item }) => (
          <View style={styles.itemContainer} key={item?.id}>
            <View style={{ gap: 20, alignItems: "center", flexDirection: "row" }}>
              <Image source={item?.image} style={{ width: 50, height: 50 }} />
              <View>
                <Text style={styles.itemName}>{item?.name}</Text>
                <Text style={styles.itemVolume}>{item?.volume}</Text>
              </View>
            </View>
            <ImageButton onPress={() => handleDeleteItem(item)} source={DeleteIcon} />
          </View>
        )}
      />
    </Layout>
  );
};

export default Interaction;
