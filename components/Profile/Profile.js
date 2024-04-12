import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Layout from "../common/Layout/Layout";
import saved from "../../assets/icons/saved.png";
import appoint from "../../assets/icons/appoint.png";
import payment from "../../assets/icons/payment.png";
import faq from "../../assets/icons/faq.png";
import log from "../../assets/icons/log.png";
import avt from "../../assets/icons/avt.png";
import next from "../../assets/icons/Arrow - Right 2.png";
import { useNavigation } from "@react-navigation/native";
import Report from "../Report/Report"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const UserDashboard = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={avt} style={styles.imageAvatar} />
      <Text style={styles.username}>Amelia Renata</Text>
      <TouchableOpacity style={[styles.userStats]}
      onPress={() => navigation.navigate("HealthNavigator", { screen: "OverView" })}
      >
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Heart rate</Text>
          <Text style={styles.statValue}>215bpm</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Calories</Text>
          <Text style={styles.statValue}>756cal</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Weight</Text>
          <Text style={styles.statValue}>103lbs</Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.userOptions}>
          <TouchableOpacity style={[styles.optionButton]}>
            <Image source={saved} style={styles.imageBeforeText} />
            <Text style={styles.optionText}>My Saved</Text>
            <Image source={next} style={styles.imageAfterText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}
          onPress={() => navigation.navigate("ElecMedicalNavigator", { screen: "OverView" })}>
            <Image source={appoint} style={styles.imageBeforeText} />
            <Text style={styles.optionText}>Don thuoc dien tu</Text>
            <Image source={next} style={styles.imageAfterText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={payment} style={styles.imageBeforeText} />
            <Text style={styles.optionText}>Payment Method</Text>
            <Image source={next} style={styles.imageAfterText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={faq} style={styles.imageBeforeText} />
            <Text style={styles.optionText}>FAQs</Text>
            <Image source={next} style={styles.imageAfterText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={log} style={styles.imageBeforeText} />
            <Text style={styles.optionText}>Logout</Text>
            <Image source={next} style={styles.imageAfterText} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#199A8E",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  imageAvatar:{
    marginTop: 88,
  },
  username: {
    color: 'white',
    fontSize: 24,
    marginTop: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  userStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: "15%",
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 25,
    color: 'white'
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: 'white'
  },
  userOptions: {
    flex: "1",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderTopLeftRadius: 20, // Border radius chỉ định cho góc trên bên trái
    borderTopRightRadius: 20, // Border radius chỉ định cho góc trên bên phải
    backgroundColor: "#fff",
    padding: 10,
  },
  optionButton: {
    width: "100%",
    height: 50,
    paddingBottom: 20,
    // backgroundColor: "#ddd",
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    // flex: '1',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionText: {
    fontSize: 16,
  },
  imageBeforeText: {},
});

export default UserDashboard;
