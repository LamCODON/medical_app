import React, { useState } from "react";
import { Text, View } from "react-native";
import ArrowLeftIcon from "../../assets/icons/arrow_left.png";
import styles from "./styles";
import ImageButton from "../common/ImageButton/ImageButton";
import BasicInput from "../common/BasicInput/BasicInput";
import { Button } from "react-native-elements";
import Layout from "../common/Layout/Layout";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // Login API here
  };

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton
          style={{ transform: [{ scale: 0.5 }] }}
          onPress={() => navigation.navigate("Welcome")}
          source={ArrowLeftIcon}
        />
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View>
        <BasicInput
          placeholder="email@gmail.com"
          value={email}
          label="Email or Mobile Number"
          styles={styles}
          onChangeText={onChangeEmail}
        />
        <BasicInput
          value={password}
          label="Password"
          inputType="password"
          styles={styles}
          onChangeText={onChangePassword}
          placeholder="********"
        />
        <Text style={styles.forgetText} onPress={() => navigation.navigate("ResetPassword")}>
          Forget Password
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 36 }}>
        <Button title="Login" buttonStyle={styles.button} titleStyle={styles.buttonText} onPress={handleLogin} />
      </View>
      <View>
        <Text style={{ textAlign: "center", marginTop: 24 }} onPress={() => navigation.navigate("Signup")}>
          Don't have an account? <Text style={styles.signupText}>Sign up</Text>
        </Text>
      </View>
    </Layout>
  );
};

export default Login;
