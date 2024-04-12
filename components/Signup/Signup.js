import React, { useState } from "react";
import { Text, View } from "react-native";
import ArrowLeftIcon from "../../assets/icons/arrow_left.png";
import styles from "./styles";
import ImageButton from "../common/ImageButton/ImageButton";
import BasicInput from "../common/BasicInput/BasicInput";
import { Button } from "react-native-elements";
import Layout from "../common/Layout/Layout";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [account, setAccount] = useState({
    name: null,
    password: null,
    email: null,
    phone: null,
    dob: null,
  });

  const handleChangeField = (filedName, text) => {
    setAccount({ ...account, [filedName]: text });
  };

  const handleSignup = () => {
    // Sign up API here
  };

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton
          style={{ transform: [{ scale: 0.5 }] }}
          onPress={() => navigation.goBack()}
          source={ArrowLeftIcon}
        />
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <View style={{ marginTop: 24 }}>
        <BasicInput
          placeholder="Ta Quang Toan"
          value={account.name}
          label="Full name"
          styles={styles}
          onChangeText={(text) => handleChangeField("name", text)}
        />
        <BasicInput
          placeholder="*********"
          value={account.password}
          label="Password"
          inputType="password"
          styles={styles}
          onChangeText={(text) => handleChangeField("password", text)}
        />
        <BasicInput
          placeholder="tqt@gmail.com"
          value={account.email}
          label="Email"
          styles={styles}
          onChangeText={(text) => handleChangeField("email", text)}
        />
        <BasicInput
          placeholder="0123456789"
          value={account.phone}
          label="Phone"
          styles={styles}
          onChangeText={(text) => handleChangeField("phone", text)}
        />
      </View>
      <View style={{ marginTop: 24 }}>
        <Text style={{ textAlign: "center" }}>By continuing, you agree to</Text>
        <Text style={{ textAlign: "center" }}>
          <Text style={styles.signupText}>Terms of Use</Text> and <Text style={styles.signupText}>Privacy Policy</Text>.
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 16 }}>
        <Button title="Sign up" buttonStyle={styles.button} titleStyle={styles.buttonText} onPress={handleSignup} />
      </View>
    </Layout>
  );
};

export default Signup;
