import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import logo from "../../assets/logo.png";
import styles from "./styles";
import Layout from "../common/Layout/Layout";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>MediCare</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Sign Up"
            buttonStyle={[styles.button, styles.signUpBtn]}
            titleStyle={[styles.buttonText, styles.signUpText]}
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Welcome;
