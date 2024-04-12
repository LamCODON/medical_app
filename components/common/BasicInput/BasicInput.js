import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import PasswordHiddenIcon from "../../../assets/icons/password_hidden.png";
import PasswordRevealIcon from "../../../assets/icons/password_reveal.png";
import ImageButton from "../ImageButton/ImageButton";

const CustomInput = ({ styles, value, placeholder, onChangeText, error, inputType, label, ...props }) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.containerStyle}>
      <View style={[basicInputStyles.innerContainer, styles.innerContainer, error && { borderColor: "red" }]}>
        <Text style={styles.label}>{label}</Text>
        <View style={[basicInputStyles.inputContainer, styles.inputContainer]}>
          <TextInput
            {...props}
            style={[basicInputStyles.input, styles.input]}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            textAlignVertical="center"
            textContentType={inputType}
            secureTextEntry={inputType === "password" && showPassword}
          />
          {inputType === "password" && (
            <TouchableOpacity style={basicInputStyles.passwordIcon} onPress={() => setShowPassword(!showPassword)}>
              <ImageButton
                source={showPassword ? PasswordHiddenIcon : PasswordRevealIcon}
                onPress={() => setShowPassword(!showPassword)}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && <Text style={[basicInputStyles.errorText, styles.errorText]}>{error}</Text>}
    </View>
  );
};

const basicInputStyles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    justifyContent: "center",
    gap: 8,
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 16,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
  },
  passwordIcon: {
    position: "absolute",
    right: 16,
  },
});

export default CustomInput;
