import { View, Text, FlatList } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Layout from "../common/Layout/Layout";
import styles from "./InteractionDetailsStyles";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/black_arrow_left.png";

const InteractionDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const data = [
    {
      id: 1,
      title: "Interactions between your drugs",
      interaction: [
        {
          rate: "MODERATE",
          name: "Bendroflume >< Rauwolfia",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
      ],
    },
    {
      id: 2,
      title: "Drug and food interactions",
      interaction: [
        {
          rate: "MODERATE",
          name: "Bendroflume >< Rauwolfia",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          rate: "MODERATE",
          name: "Rauwolfia >< Food",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          rate: "MODERATE",
          name: "Rauwolfia >< Food",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          rate: "MINOR",
          name: "Bendroflume >< Food",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          rate: "MINOR",
          name: "Bendroflume >< Food",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
      ],
    },
  ];

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton onPress={() => navigation.goBack()} source={ArrowLeftIcon} />
        <Text style={styles.headerText}>{route.name}</Text>
      </View>
      <View>
        <Text>5 potential interactions and/or warnings found for the following 2 drugs:</Text>
        <Text style={{ paddingLeft: 4 }}>- OBH Combi</Text>
        <Text style={{ paddingLeft: 4 }}>- Panadol</Text>
        <Text style={styles.addAnother} onPress={() => navigation.navigate("Interaction")}>
          Add another drug
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          contentContainerStyle={{ paddingBottom: 160 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginTop: 16 }}>
              <Text style={[styles.text, styles.interactionTitle]}>{item.title}</Text>
              {item.interaction.map((inter, index) => (
                <View style={{ marginTop: 16, gap: 16 }} key={index}>
                  <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                    <View
                      style={[styles.rateBox, inter.rate !== "MODERATE" ? styles.rateBoxMinor : styles.rateBoxModerate]}
                    >
                      <Text style={styles.rate}>{inter.rate}</Text>
                    </View>
                    <Text style={[styles.rateName, styles.text]}>{inter.name}</Text>
                  </View>
                  <Text style={styles.text}>{inter.description}</Text>
                </View>
              ))}
            </View>
          )}
        />
      </View>
    </Layout>
  );
};

export default InteractionDetails;
