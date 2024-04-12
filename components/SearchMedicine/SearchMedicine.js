import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import Layout from "../common/Layout/Layout";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import DrugIcon from "../../assets/icons/drugs.png";
import InteractionIcon from "../../assets/icons/interaction.png";

const SearchMedicine = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <Text style={styles.headerText}>Identify Medicine</Text>
      <View style={styles.container}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => navigation.navigate("MedicineNavigator", { screen: "Drugs" })}
        >
          <Image source={DrugIcon} />
          <Text style={styles.itemText}>Drugs</Text>
        </Pressable>
        <Pressable
          style={styles.itemContainer}
          onPress={() => navigation.navigate("MedicineNavigator", { screen: "Interaction" })}
        >
          <Image source={InteractionIcon} />
          <Text style={styles.itemText}>Interaction</Text>
        </Pressable>
      </View>
    </Layout>
  );
};

export default SearchMedicine;
