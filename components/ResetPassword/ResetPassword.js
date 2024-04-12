import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import ImageButton from "../common/ImageButton/ImageButton";
import ArrowLeftIcon from "../../assets/icons/arrow_left.png";
import BasicInput from "../common/BasicInput/BasicInput";
import { Button } from "react-native-elements";
import Layout from "../common/Layout/Layout";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPassword] = useState(null);

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangeConfirmPassword = (text) => {
    setConfPassword(text);
  };

  const handleResetPassword = () => {
    // Reset password API here
  };

  return (
    <Layout>
      <View style={styles.viewBox}>
        <ImageButton
          style={{ transform: [{ scale: 0.5 }] }}
          onPress={() => navigation.goBack()}
          source={ArrowLeftIcon}
        />
        <Text style={styles.headerText}>Reset password</Text>
      </View>
      <Text style={styles.passwordHint}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Text>
      <View>
        <BasicInput
          placeholder="********"
          value={password}
          label="Password"
          styles={styles}
          inputType="password"
          onChangeText={onChangePassword}
        />
        <BasicInput
          value={confPassword}
          label="Confirm password"
          inputType="password"
          styles={styles}
          onChangeText={onChangeConfirmPassword}
          placeholder="********"
        />
      </View>
      <View style={{ marginVertical: 40, alignItems: "center" }}>
        <Button
          title="Reset password"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={handleResetPassword}
        />
      </View>
    </Layout>
  );
};

export default ResetPassword;
