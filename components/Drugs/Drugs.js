import { View, Text, Image, ScrollView, Pressable, SectionList, FlatList } from "react-native";
import React from "react";
import Layout from "../common/Layout/Layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import drugsStyles from "./drugsStyles";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import AdsMedicineImg from "../../assets/ads_medicine.png";
import ProductImg from "../../assets/product.png";

const Drugs = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const renderProducts = () => {
    const products = [];
    for (let index = 1; index < 20; index++) {
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

  const products = [
    { title: "Popular Products", data: renderProducts() },
    { title: "Products", data: renderProducts() },
  ];

  return (
    <Layout>
      <View style={drugsStyles.viewBox}>
        <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
        <Text style={drugsStyles.headerText}>{route.name}</Text>
      </View>
      <Text style={{ marginVertical: 16 }}>Search field</Text>
      <View style={drugsStyles.adsContainer}>
        <View>
          <Text style={drugsStyles.adsText}>Get more information</Text>
          <Text style={drugsStyles.adsText}>Safe more</Text>
          <Text style={drugsStyles.adsText}>For your health</Text>
        </View>
        <Image style={drugsStyles.adsImage} source={AdsMedicineImg} />
      </View>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={products || []}
        renderSectionHeader={({ section }) => (
          <View style={drugsStyles.productContainer}>
            <View style={drugsStyles.productHeader}>
              <Text style={drugsStyles.productHeaderText}>{section.title}</Text>
              <Text style={drugsStyles.seeAll} onPress={() => navigation.navigate("Drug List")}>
                See all
              </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={section.data}
              renderItem={({ item }) => (
                <Pressable
                  key={item?.id}
                  style={drugsStyles.itemContainer}
                  onPress={() => navigation.navigate("MedicineNavigator", { screen: "Drug Details", params: { item } })}
                >
                  <Image source={item?.image} />
                  <Text style={drugsStyles.itemText}>{item?.name}</Text>
                  <Text style={drugsStyles.itemVolume}>{item?.volume}</Text>
                </Pressable>
              )}
            />
          </View>
        )}
        renderItem={() => null}
      />
    </Layout>
  );
};

export default Drugs;
