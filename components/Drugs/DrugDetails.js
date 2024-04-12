import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Layout from "../common/Layout/Layout";
import drugDetailsStyles from "./drugDetailsStyles";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";
import ProductDetailImg from "../../assets/product_details.png";
import STYLES from "../../constant/styles";

const DrugDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params?.item;

  return (
    <Layout>
      <View style={drugDetailsStyles.viewBox}>
        <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
        <Text style={drugDetailsStyles.headerText}>{route.name}</Text>
      </View>
      <View style={{ padding: 40, alignItems: "center" }}>
        <Image source={ProductDetailImg} style={drugDetailsStyles.image} />
      </View>
      <View>
        <Text style={drugDetailsStyles.itemName}>{item?.name}</Text>
        <Text style={[drugDetailsStyles.text, drugDetailsStyles.itemVolume]}>{item?.volume}</Text>
        <Text style={[drugDetailsStyles.itemName, drugDetailsStyles.itemDescription]}>Description</Text>
        <Text style={[drugDetailsStyles.text, drugDetailsStyles.itemHeaderText]}>What is OBH Combi</Text>
        <Text style={drugDetailsStyles.text}>{item?.description?.define}</Text>
        <Text style={[drugDetailsStyles.text, drugDetailsStyles.itemHeaderText]}>Warning</Text>
        <Text style={drugDetailsStyles.text}>{item?.description?.warning}</Text>
        <Text style={[drugDetailsStyles.text, drugDetailsStyles.itemHeaderText]}>What to advoid</Text>
        <Text style={drugDetailsStyles.text}>{item?.description?.avoid}</Text>
        <Text style={[drugDetailsStyles.text, drugDetailsStyles.itemHeaderText]}>Interaction</Text>
        <Text style={drugDetailsStyles.text}>{item?.description?.interaction}</Text>
      </View>
    </Layout>
  );
};

export default DrugDetails;
